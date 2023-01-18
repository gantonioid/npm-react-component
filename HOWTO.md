# How to create an NPM package of a React component

> Full tutorial: https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

## In a nutshell
Create your files and folders like so:
```cmd
-root
|-src
|  |-components
|  | |-MyComponent
|  | | |-index.ts
|  | | |-MyComponent.tsx //a module
|  | |-index.ts //exports all modules
|  |-index.ts //exports your package
```

So basically your component (module) is in `MyComponent.tsx` and you import/export it in its own`index.ts`. Example: Circle

Then you import all of your modules from their correspondig directory and export them all from a file `index.ts` at a higher level. This file will map the imports of the shapes (Circle, Triangle, Square) to the file that defines it. This is just a way to better-organize the package.

Finally do 
```tsx
export * from './components';
```
at the highest level `index.ts` to expose your modules as a part of the package.

## A component's content

The component itself shoud take care of its desired behaviour. Using as many files as needed (style, helpers, services, etc).

### Tests
A subdirectory `tests` is suggested for every component, where the tests are written using `jest` and `@testing-library/react`.

### DEMOS (Storybook)
A subdirectory `stories` is suggested for every component, so the main behaviour(s) of the component can be demonstrated to a fellow developer/designer.

### NPM publish
This is required in your `package.json` because private packages need a credit card $$$

> This means the package will be public!!

```json
{
    ...
    "publishConfig": {
        "access": "public"
    },
    ...
}
```

Before a publish, you should update your package's version in the `package.json` file