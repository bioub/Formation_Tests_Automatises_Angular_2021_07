# Exercices

## Créer les modules de chaque test de composant

Dans les fichiers suivants :
- src/app/core/home/home.component.spec.ts
- src/app/core/menu/menu.component.spec.ts
- src/app/core/not-found/not-found.component.spec.ts
- src/app/todos/todo-form/todo-form.component.spec.ts
- src/app/todos/todo-item/todo-item.component.spec.ts
- src/app/todos/todos-list/todos-list.component.spec.ts
- src/app/users/user-add/user-add.component.spec.ts
- src/app/users/user-show/user-show.component.spec.ts
- src/app/users/users-list/users-list.component.spec.ts

En vous inspirant de :
src/app/todos/todos/todos.component.spec.ts

Recréer les fonctions beforeAll et afterAll qui font échouer les tests si problème dans le template.

Si nécessaire transformer le beforeEach qui compile le composant à tester avec async/await (de temps en temps remplacer la fonction async(), par async / await, ou sinon rajouter await)

En utilisant les sections declarations et imports faites passer les tests.

## Test de Input/Output

Tester l'input de TodoItem et l'ouput de TodoForm
