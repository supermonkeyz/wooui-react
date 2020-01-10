## 基础用法
```jsx
const [count, setCount] = React.useState(0);
<div>
  <p>Clicked {count} times</p>
  <Button onClick={(e) => {setCount(count + 1)}}>Button</Button>
</div>
```

## 按钮类型
```jsx
const kinds = ['primary', 'secondary', 'success', 'danger', 'default'];
const sorts = ['line', 'flat'];

sorts.map(
  sort => {
    return (
      <div key={sort}>
        <h3>sort: {sort}</h3>
        {kinds.map(kind => <Button key={kind} sort={sort} kind={kind} className="button-item">{kind}</Button>)}
      </div>
    );
  }
);
```
<style>
.button-item {
  margin-right: 10px;
}
</style>

## 按钮大小
```jsx
const sizes = ['s', 'm', 'l'];

sizes.map(size => <Button size={size} className="button-item">按钮</Button>);
```

## 不可用
```jsx
<Button disabled className="button-item">不可点击</Button>
<Button sort="flat" disabled>不可点击</Button>
```

## 加载中
```jsx
<Button loading>加载中</Button>
```