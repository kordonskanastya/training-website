import { injectable } from 'inversify';
import { Panda, IPanda } from '../models/panda';

// Клас-репозиторій для роботи з пандими
// Анотація injectable дозволяє впровадити цей репозиторій через IoC контейнер
@injectable()
export class PandaRepository {
    // Метод для отримання всіх панд з бази даних
    public async findAll(): Promise<IPanda[]> {
        return Panda.find();
    }

    // Метод для пошуку панди за унікальним ідентифікатором
    public async findById(id: string): Promise<IPanda | null> {
        return Panda.findById(id);
    }

    // Метод для створення нового панди в базі даних
    public async create(rabbitData: IPanda): Promise<IPanda> {
        const panda = new Panda(rabbitData);
        return panda.save();
    }

    // Метод для видалення панди за ідентифікатором
    public async delete(id: string): Promise<boolean> {
        const result = await Panda.findByIdAndDelete(id);
        return result !== null;
    }

    // Метод для повного оновлення даних про панди (заміна всіх полів)
    public async update(id: string, rabbitData: IPanda): Promise<IPanda | null> {
        return Panda.findByIdAndUpdate(id, rabbitData, { new: true });
    }

    // Метод для часткового оновлення даних про панди (оновлення лише вказаних полів)
    public async patch(id: string, rabbitData: Partial<IPanda>): Promise<IPanda | null> {
        return Panda.findByIdAndUpdate(id, { $set: rabbitData }, { new: true });
    }
}
