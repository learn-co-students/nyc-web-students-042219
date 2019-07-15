Combined Reducers
=================

## SWBATs
- [x] Use multiple reducers to help organize Redux code
- [x] Change state in multiple reducers simultaneously
- [x] Segment and manage data into multiple reducers
- [x] Use action creators to make actions accessible to multiple components

## Lecture Notes

### Gotchas to combined reducers
1. Using combined reducers will nest your state
2. Calling dispatch calls ALL reducers with the same action
  - Use this so that one action can communicate changes to multiple reducers


### Action Creators
```js
function handleChange(text){
  return {type: "INPUT_CHANGE", payload: text}
}

```

Note: `dispatch` is not called!