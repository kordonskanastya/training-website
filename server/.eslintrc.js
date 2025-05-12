module.exports = {
  // Визначення парсера для TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Шляхи до конфігураційних файлів TypeScript
    project: ['tsconfig.json', 'tests/tsconfig.json'],
    // Тип модулів у коді
    sourceType: 'module',
  },
  // Плагіни, які використовуються
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  // Набори правил, які розширюються
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // Встановити як кореневий конфіг
  root: true,
  // Налаштування середовища
  env: {
    node: true, // Код виконується в Node.js
    mocha: true, // Підтримка Mocha для тестів
  },
  // Шаблони файлів, які ігноруються при перевірці
  ignorePatterns: ['.eslintrc.js', 'dist/', 'node_modules/'],
  // Правила лінтера
  rules: {
    // Вимкнути правило префіксів для інтерфейсів
    '@typescript-eslint/interface-name-prefix': 'off',
    // Вимагати явного вказання типу повернення функцій
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // Вимагати явного вказання типів на границях модулів
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    // Попередження при використанні типу any
    '@typescript-eslint/no-explicit-any': 'warn',
    // Помилка при невикористаних змінних (крім тих, що починаються з _)
    '@typescript-eslint/no-unused-vars': ['off', { 'argsIgnorePattern': '^_' }],
    // Помилка при невідповідності правилам форматування Prettier
    'prettier/prettier': 'off',
    // Правила іменування
    '@typescript-eslint/naming-convention': [
      'off',
      {
        // Інтерфейси мають починатися з 'I' та бути в PascalCase
        'selector': 'interface',
        'format': ['PascalCase'],
        'prefix': ['I']
      },
      {
        // Типи мають бути в PascalCase
        'selector': 'typeAlias',
        'format': ['PascalCase']
      },
      {
        // Перелічення мають бути в PascalCase
        'selector': 'enum',
        'format': ['PascalCase']
      },
      {
        // Класи мають бути в PascalCase
        'selector': 'class',
        'format': ['PascalCase']
      }
    ],
    // Явне вказання модифікаторів доступу для членів класу
    '@typescript-eslint/explicit-member-accessibility': ['off', { 'overrides': { 'constructors': 'no-public' } }],
    // Рекомендований порядок членів класу
    '@typescript-eslint/member-ordering': 'warn',
    // Попередження про надлишкове вказання типів
    '@typescript-eslint/no-inferrable-types': 'warn',
    // Попередження про порожні інтерфейси
    '@typescript-eslint/no-empty-interface': 'warn',
    // Попередження про порожні функції
    '@typescript-eslint/no-empty-function': 'warn',
    // Попередження про використання застарілих типів
    '@typescript-eslint/ban-types': 'warn',
    // Рекомендація використовувати for-of замість for
    '@typescript-eslint/prefer-for-of': 'warn',
    // Рекомендація використовувати as const
    '@typescript-eslint/prefer-as-const': 'warn',
    // Заборона імпортів через require()
    '@typescript-eslint/no-require-imports': 'off',
    // Строгі перевірки булевих виразів
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Перевірка обробки промісів
    '@typescript-eslint/no-floating-promises': 'off',
    // Перевірка await для промісів
    '@typescript-eslint/await-thenable': 'off',
    // Перевірка правильного використання промісів
    '@typescript-eslint/no-misused-promises': 'off',
    // Обмеження використання шаблонних рядків
    '@typescript-eslint/restrict-template-expressions': 'off',
    // Вимкнути стандартне правило повернення await
    'no-return-await': 'off',
    // Використовувати правило TypeScript для return await
    '@typescript-eslint/return-await': 'off'
  },
};
