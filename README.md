# Twitter Clone Poroject

## Create REact Application
```sh
    npx create-react-app twitter-clone
```

## Add Material UI 

```sh
    $ npm install @material-ui/core
    $ npm install @material-ui/icons
```

## Set Global Varriable & Use This:

```sh
Set:
body{
  --twitter-color:#1DA1F2;
  --twitter-background:#E8F5FE;
}
Use:
    color: var(--twitter-color);
```
## Add class depending on Conditional props

```sh
        <div className={`sideBarOption ${active && 'sideBarOption--active'}`}>
```

## Hide Scrollbar from Chrome, Safari, Opera:

```sh
    .div::-webkit-scrollbar{
        display:none;
    }
```

## Hide Scrollbar from IE, Edge, Firefox:

```sh
    .div{
        -ms-overflow-style:none;
        scrollbar-width:none;
    }
```