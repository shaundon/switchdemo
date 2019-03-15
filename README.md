# Switch Demo

Demo of a switch component on React Native 0.59.1 not displaying colours correctly.

## To run

This is a standard `react-native init` project, so just do `react-native run-android`.

## Explanation

The `Switch` in this demo is set up like this:

```
<Switch 
    value={this.state.value}
    onValueChange={this.onValueChange}
    thumbColor="red" 
    trackColor={{
        true: "yellow",
        false: "purple",
    }} 
/>
```

According to [the documentation](https://facebook.github.io/react-native/docs/switch#trackcolor), this means that the track should be purple when the switch is enabled and yellow when it is disabled. 

When disabled it works fine, but when enabled the track is blue - props have no effect on it.

![enabled](./enabled.png)