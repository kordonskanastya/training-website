import { Router, Request, Response } from 'express';
import { container } from '../config/container';
import { RabbitRepository } from '../repositories/RabbitRepository';

// Створюємо новий обробник HTTP-запитів Express
const router = Router();
// Отримуємо екземпляр репозиторію панд з контейнера інверсії залежностей
const rabbitRepository = container.get(RabbitRepository);

// Обробка HTTP-запиту GET / - отримання всіх записів панд
router.get('/', (async (_req: Request, res: Response) => {
    try {
        // Отримуємо всі записи панд з бази даних через репозиторій
        const pandas = await rabbitRepository.findAll();
        res.json(pandas);
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Обробка HTTP-запиту GET /:id - отримання запису одного панди за ідентифікатором
router.get('/:id', (async (req: Request, res: Response) => {
    try {
        // Пошук панди за ідентифікатором
        const panda = await rabbitRepository.findById(req.params.id);
        if (panda) {
            res.json(panda);
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис панди не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Обробка HTTP-запиту POST / - створення нового запису панди
router.post('/', (async (req: Request, res: Response) => {
    try {
        // Створюємо новий запис панди з даних запиту
        const newRabbit = await rabbitRepository.create(req.body);
        // Повертаємо статус 201 (Created) і дані створеного панди
        res.status(201).json(newRabbit);
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Обробка HTTP-запиту PUT /:id - повне оновлення запису панди
router.put('/:id', (async (req: Request, res: Response) => {
    try {
        // Перевірка наявності всіх обов'язкових полів для PUT запиту
        const requiredFields = ['name', 'age', 'height', 'weight', 'gender'];
        const missingFields = requiredFields.filter(field => !(field in req.body));

        // Якщо є відсутні поля, повертаємо помилку 400 Bad Request
        if (missingFields.length > 0) {
            return res.status(400).json({
                message: `Відсутні обов'язкові поля: ${missingFields.join(', ')}`,
            });
        }

        // Оновлюємо панди з вказаним ID
        const panda = await rabbitRepository.update(req.params.id, req.body);
        if (panda) {
            return res.json(panda);
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            return res.status(404).json({ message: 'Запис панди не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        return res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Обробка HTTP-запиту PATCH /:id - часткове оновлення запису панди
router.patch('/:id', (async (req: Request, res: Response) => {
    try {
        // Часткове оновлення запису панди - передаються лише ті поля, які потрібно змінити
        const panda = await rabbitRepository.patch(req.params.id, req.body);
        if (panda) {
            res.json(panda);
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис панди не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Обробка HTTP-запиту DELETE /:id - видалення запису панди
router.delete('/:id', (async (req: Request, res: Response) => {
    try {
        // Видаляємо дані про панди за ID
        const panda = await rabbitRepository.delete(req.params.id);
        if (panda) {
            // У разі успіху повертаємо повідомлення про видалення
            res.json({ message: 'Запис про панди видалено' });
        } else {
            // Якщо заєць не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис про панди не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

export default router;
