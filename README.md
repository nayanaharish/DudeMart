# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 🧠 Learnings & Fixes

### Issue 1: State update not reflecting immediately
**Problem:**  
When updating `category` using `useState`, the updated value was not available immediately after calling `setCategory`.

**Reason:**  
State updates in React are asynchronous.

**Solution:**  
Moved API call logic into `useEffect` and listened to changes in `category`.

```js
useEffect(() => {
  fetchProducts(category);
}, [category]);



### Issue2 : State Management Learning

**Problem:**  
Product data and selected category were needed in multiple components
(Categories, Product display, and data logic).

**Incorrect Approach:**  
Declaring `useState` in sibling or child components caused data inconsistency.

**Solution:**  
Declared `useState` at the parent component level and passed:
- State value to components that consume it
- Setter function to components that update it

**Result:**  
Centralized state management with predictable data flow.



### Dynamic Styling Using State

**Idea:**  
Used conditional class names to apply different styles based on selected category.

**Implementation:**  
Stored selected category in `useState` and applied class names conditionally in JSX.

**Benefit:**  
Cleaner UI logic, reusable styles, and better scalability.

