## 基础用法
```jsx
const [count, setCount] = React.useState(0);
<div>
  <p>Clicked {count} times</p>
  <Button onClick={(e) => {setCount(count + 1); console.log(e.target)}}>Button</Button>
</div>
```

## 按钮类型
```jsx
const kinds = ['primary', 'secondary', 'success', 'danger', 'default'];

kinds.map(kind => <Button key={kind} kind={kind}>{kind}</Button>);
```