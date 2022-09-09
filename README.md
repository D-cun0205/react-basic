JSX: 리액트 생김새 정의하는 문법  
babel: JSX -> Javascript 변환  
태드는 반드시 닫혀있어야 오류가 발생하지 않음

단일 태그는 그냥 정의해서 사용해도 된다

```
return (
    <div>Hello world</div>
);

```

2개 이상의 태그가 적용된 경우 별도의 태그로 감싸주어야 한다

```
return (
    <div>
        <Hello />
        <div>안녕히계세요</div>
    </div>
);

or React Fragment

return (
    <>
        <Hello />
        <div>안녕히계세요</div>
    </>
);
```

엘리먼트에 class 적용 시 className 으로 설정하여 사용  
JSX 내부 주석 {/_ 주석 내용 공간 _/}
