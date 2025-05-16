// Експорт специфікації Swagger/OpenAPI для документації про API
export const swaggerSpec = {
    // Версія специфікації OpenAPI
    openapi: '3.0.0',
    // Загальна інформація про API
    info: {
        title: 'API Сайту про панд',
        version: '1.0.0',
        description: 'Документація API для Сайту про панд',
    },
    // Налаштування серверів для тестування API
    servers: [
        {
            url:
                process.env.CODESPACE_NAME !== undefined
                    ? `https://${process.env.CODESPACE_NAME}-5000.app.github.dev`
                    : 'http://localhost:5000',
            description: 'Development server',
        },
    ],
    // Визначення кінцевих точок (endpoints) REST API та операцій з ними
    paths: {
        '/api/pandas': {
            // GET запит для отримання всіх панд
            get: {
                summary: 'Отримати всіх панд',
                responses: {
                    '200': {
                        description: 'Список всіх панд',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Panda' },
                                },
                            },
                        },
                    },
                },
            },

            // POST запит для створення нового панди
            post: {
                summary: 'Створити нового панди',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Panda' },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: "Створений об'єкт панди",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Panda' },
                            },
                        },
                    },
                },
            },
        },

        // Операції для конкретного панди за ID
        '/api/pandas/{id}': {
            // GET запит для отримання панди за ID
            get: {
                summary: 'Отримати панди за ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID панди',
                    },
                ],
                responses: {
                    '200': {
                        description: "Об'єкт панди",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Panda' },
                            },
                        },
                    },
                    '404': { description: 'панди не знайдено' },
                },
            },

            // PUT запит для повного оновлення панди за ID
            put: {
                summary: 'Повністю оновити панди',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID панди',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Panda' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт панди",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Panda' },
                            },
                        },
                    },
                    '404': { description: 'панди не знайдено' },
                },
            },
            // PATCH запит для часткового оновлення панди за ID
            patch: {
                summary: 'Частково оновити панди',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID панди',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Panda' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт панди",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Panda' },
                            },
                        },
                    },
                    '404': { description: 'панди не знайдено' },
                },
            },
            // DELETE запит для видалення даних про панди за ID
            delete: {
                summary: 'Видалити дані про панди',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID панди',
                    },
                ],
                responses: {
                    '200': { description: 'Повідомлення про успішне видалення' },
                    '404': { description: 'панди не знайдено' },
                },
            },
        },
    },

    // Визначення компонентів для повторного використання
    components: {
        // Схеми даних
        schemas: {
            // Схема об'єкта Заєць
            Panda: {
                type: 'object',
                required: ['name', 'age', 'height', 'weight', 'gender'],
                properties: {
                    name: {
                        type: 'string',
                        description: "Ім'я панди",
                    },
                    age: {
                        type: 'number',
                        description: 'Вік панди у роках',
                    },
                    height: {
                        type: 'number',
                        description: 'Висота панди в сантиметрах',
                    },
                    weight: {
                        type: 'number',
                        description: 'Вага панди в кілограмах',
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        description: 'Стать панди',
                    },
                    bambooEatenKilo: {
                        type: 'number',
                        description: 'Вага бамбуку',
                    },
                    description: {
                        type: 'string',
                        description: "Опис панди (необов'язкове поле)",
                    },
                },
            },
        },
    },
};
