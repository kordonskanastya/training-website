import { injectable } from 'inversify';
import { Rabbit, IRabbit } from '../models/panda';

// Клас-репозиторій для роботи з пандими
// Анотація injectable дозволяє впровадити цей репозиторій через IoC контейнер
@injectable()
export class RabbitRepository {
    // Метод для отримання всіх панд з бази даних
    public async findAll(): Promise<IRabbit[]> {
        return Rabbit.find();
    }

    // Метод для пошуку панди за унікальним ідентифікатором
    public async findById(id: string): Promise<IRabbit | null> {
        return Rabbit.findById(id);
    }

    // Метод для створення нового панди в базі даних
    public async create(rabbitData: IRabbit): Promise<IRabbit> {
        const panda = new Rabbit(rabbitData);
        return panda.save();
    }

    // Метод для видалення панди за ідентифікатором
    public async delete(id: string): Promise<boolean> {
        const result = await Rabbit.findByIdAndDelete(id);
        return result !== null;
    }

    // Метод для повного оновлення даних про панди (заміна всіх полів)
    public async update(id: string, rabbitData: IRabbit): Promise<IRabbit | null> {
        return Rabbit.findByIdAndUpdate(id, rabbitData, { new: true });
    }

    // Метод для часткового оновлення даних про панди (оновлення лише вказаних полів)
    public async patch(id: string, rabbitData: Partial<IRabbit>): Promise<IRabbit | null> {
        return Rabbit.findByIdAndUpdate(id, { $set: rabbitData }, { new: true });
    }
}
