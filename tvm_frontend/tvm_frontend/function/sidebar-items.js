initSidebarItems({"fn":[["get_global_func","Returns a registered TVM function by name."],["register","Registers a Rust function with signature `fn(&[TVMArgValue]) -> Result<TVMRetValue<'static>>` as a global TVM packed function from frontend to TVM backend."]],"struct":[["Builder","Function builder in order to create and call functions. Note: Currently TVM functions accept at most one return value."],["Function","Wrapper around TVM function handle which includes `is_global` indicating whether the function is global or not and `is_released` to help for dropping the function handle. The value of these fields can be accessed through their respective methods."]]});