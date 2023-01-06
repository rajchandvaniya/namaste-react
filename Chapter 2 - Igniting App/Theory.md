## What is NPM
NPM is the Package Manager for managing dependencies for javascript projects. It is the software registry with containing packages. Each project can define dependencies in `package.json` file and then with `npm install` all the dependencies will be fetched.

## What is Parcel/Webpack? Why do we need it?
Parcel/Webpack are Bundlers, they provide lot of features like Live Server, Hot Module Replacements, Production optimizations and many more. 

## What is .parcel-cache?
.parcel-cache is used by parcel to store information about the project when parcel builds it so that it doesn't have to rebuild everything for the next time. Dev builds are fast because of the use of the cache.

## What is npx?
npx is used to execute the javascript packages, for eg. `npx parcel <ENTRYPOINT>`

## What is the difference between dependencies and devDependencies?
* devDependencies - packages only required on dev machine for local development and testing , eg. bundler like parcel
* dependencies - packages which are required in Production

## What is Tree Shaking?
Tree Shaking is the optimization technique to remove the code from dependencies which is not referenced in the code. It reduces the dist size.

## Hot Module Replacement
HMR is the feature of a live server wherein the locally running server dynamically reloads the module which has changed. Because of HMR, we don't need to restart the dev server upon any change in the code. Changes are automatically applied to browser page as well without manual reloads.

## Parcel Superpowers
1. Bundling the code for production
2. Dev Server
3. Hot Reloading
4. Tree Shaking
5. Minification

## .gitginore, what to add and what not to add?
.gitignore is used to tell git files which should not be version controlled. Any file/directory pattern specified in it will be ignored by git. With reference to react project, along with code, `package.json` and `package-lock.json` files should never be added to it. `.parcel-cache`, `node-modules` should be added to it so that they are not uploaded to the repository.

## `package.json` vs `package-lock.json`
* `package.json` - specifies dependencies, devDependencies, scripts and other project metadata
* `package-lock.json` - specifies hash, exact version of the dependencies, direct and transitive. dependencies allows using `^` and `~` to specify pattern for allowed versions for auto-upgrade. `package-lock.json` is used to store the exact version which was installed. It should always be version controlled so that in production also the same version as the local development is used.

## Why I should not modify `package-lock.json`?
Any manual change to version in package-lock can result in `npm install` failures, since for each package sha-512 hash is also stored for integrity. If you eithe change the version or hash, it can cause failure.

## What is node_modules? is it good idea to push it to git
All the downloaded packages are placed under node_modules dir. It shouldn't be pushed to git, usually the size is very large and it can be recreated with `package.json` and `package-lock.json`.

## What is `dist` folder?
parcel stores production build files under dist folder, it has html/css/js files.

## what is browserlist?
babel helps creating backward compatible code for ES6 by adding pollyfill. browserlist is the way to specify compatibility for browsers.
