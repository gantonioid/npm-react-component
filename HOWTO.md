# How to create an NPM package of a React component

> NPM package: https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca

> Storybook quickstart: https://storybook.js.org/docs/react/get-started/install

## In a nutshell
Create your files and folders like so:
```cmd
-root
|-src
  |-components
  | |-MyComponent.tsx
  |-index.tsx
```

So basically your component is in `MyComponent.tsx` and you import/export it in `index.tsx`.

You can add jest tests (optional, suggested).

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