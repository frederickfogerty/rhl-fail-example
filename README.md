# React Hot Loader Failing Example

Reproduce failing example:

1. `npm i`
2. `npm start` to start a dev server on 0.0.0.0:3000
3. Pick a comment, and click the little edit symbol
4. Click Edit
5. Go to app/views/components/Comment.jsx and change 'Save' to something else. Save the file.
6. Observe that state is lost both in the child component, and in the parent component(s).
