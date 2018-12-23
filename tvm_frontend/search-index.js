var N = null;var searchIndex = {};
searchIndex["tvm_frontend"]={"doc":"TVM is a compiler stack for deep learning systems.","items":[[5,"get_last_error","tvm_frontend","Gets the last error message",N,[[],["str"]]],[5,"version","","Outputs the current TVM version",N,[[],["str"]]],[0,"function","","This module provides idiomatic Rust API for creating and working with TVM functions.",N,N],[3,"Function","tvm_frontend::function","Wrapper around TVM function handle which includes `is_global` indicating whether the function is global or not and `is_released` to help for dropping the function handle. The value of these fields can be accessed through their respective methods.",N,N],[3,"Builder","","Function builder in order to create and call functions. Note: Currently TVM functions accept at most one return value.",N,N],[12,"func","","",0,N],[12,"arg_buf","","",0,N],[12,"ret_buf","","",0,N],[5,"get_global_func","","Returns a registered TVM function by name.",N,[[["str"],["bool"]],["option",["function"]]]],[5,"register","","Registers a Rust function with signature `fn(&[TVMArgValue]) -> Result<TVMRetValue<'static>>` as a global TVM packed function from frontend to TVM backend.",N,N],[11,"get_function","","For a given function, it returns a function by name.",1,[[["str"],["bool"]],["option",["function"]]]],[11,"handle","","Returns the underlying TVM function handle.",1,[[["self"]],["tvmfunctionhandle"]]],[11,"is_global","","Returns `true` if the underlying TVM function is global and `false` otherwise.",1,[[["self"]],["bool"]]],[11,"is_released","","Returns `true` if the underlying TVM function has been released from the frontend and `false` otherwise.",1,[[["self"]],["bool"]]],[11,"new","","",0,[[["option",["function"]],["option",["box"]],["option",["box"]]],["self"]]],[11,"get_function","","",0,[[["self"],["str"],["bool"]],["self"]]],[11,"arg","","Pushes a [`TVMArgValue`] into the function.",0,[[["self"],["t"]],["self"]]],[11,"args","","Pushes multiple [`TVMArgValue`]s into the function.",0,[[["self"],["i"]],["self"]]],[11,"set_output","","Sets an output for a function that requirs a mutable output to be provided. See the `basics` in `tests` for an example.",0,[[["self"],["t"]],["self"]]],[11,"invoke","","Calls the function that created from builder.",0,[[["self"]],["result",["tvmretvalue"]]]],[0,"bytearray","tvm_frontend","Provides [`TVMByteArray`] which is used for passing the model parameters (stored as byte-array) to a runtime module.",N,N],[3,"TVMByteArray","tvm_frontend::bytearray","A struct holding the TVM byte-array.",N,N],[11,"len","","Gets the length of the underlying byte-array",2,[[["self"]],["usize"]]],[11,"data","","Gets the underlying byte-array as `Vec<i8>`",2,[[["self"]],["vec",["i8"]]]],[0,"context","tvm_frontend","Provides [`TVMContext`] and related device specific informations.",N,N],[3,"TVMDeviceType","tvm_frontend::context","Device type which can be from a supported device name. See the supported devices  in TVM project.",N,N],[12,"0","","",3,N],[3,"TVMContext","","Represents the underlying device context. Default is cpu.",N,N],[12,"device_type","","Supported device types",4,N],[12,"device_id","","Device id",4,N],[11,"new","","Creates context from device type and id.",4,[[["tvmdevicetype"],["usize"]],["self"]]],[11,"cpu","","",4,[[["usize"]],["self"]]],[11,"gpu","","",4,[[["usize"]],["self"]]],[11,"nvptx","","",4,[[["usize"]],["self"]]],[11,"cuda","","",4,[[["usize"]],["self"]]],[11,"cpu_pinned","","",4,[[["usize"]],["self"]]],[11,"cl","","",4,[[["usize"]],["self"]]],[11,"opencl","","",4,[[["usize"]],["self"]]],[11,"metal","","",4,[[["usize"]],["self"]]],[11,"vpi","","",4,[[["usize"]],["self"]]],[11,"rocm","","",4,[[["usize"]],["self"]]],[11,"exist","","Checks whether the context exists or not.",4,[[["self"]],["bool"]]],[11,"sync","","Synchronize the context stream.",4,[[["self"]],["result"]]],[11,"max_threads_per_block","","",4,[[["self"]],["usize"]]],[11,"warp_size","","",4,[[["self"]],["usize"]]],[11,"max_shared_memory_per_block","","",4,[[["self"]],["usize"]]],[11,"compute_version","","",4,[[["self"]],["usize"]]],[11,"device_name","","",4,[[["self"]],["usize"]]],[11,"max_clock_rate","","",4,[[["self"]],["usize"]]],[11,"multi_processor_count","","",4,[[["self"]],["usize"]]],[11,"max_thread_dimensions","","",4,[[["self"]],["usize"]]],[0,"errors","tvm_frontend","This module implements TVM custom [`Error`], [`ErrorKind`] and [`Result`] types.",N,N],[3,"Error","tvm_frontend::errors","The Error type.",N,N],[12,"0","","The kind of the error.",5,N],[4,"ErrorKind","","The kind of an error.",N,N],[13,"Msg","","A convenient variant for String.",6,N],[13,"ShapeError","","",6,N],[13,"NulError","","",6,N],[13,"IntoStringError","","",6,N],[13,"EmptyArray","","",6,N],[13,"NullHandle","","",6,N],[13,"FunctionNotFound","","",6,N],[13,"TypeMismatch","","",6,N],[13,"MissingShapeError","","",6,N],[6,"Result","","Convenient wrapper around `std::Result`.",N,N],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with this crate.",N,N],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns some type that can be converted to `ErrorKind`, boxes the original error to store as the cause, then returns a new error containing the original error.",7,[[["self"],["f"]],["result",["error"]]]],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",5,[[["errorkind"]],["error"]]],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",5,[[["e"],["k"]],["error"]]],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a kind, and generates a backtrace",5,[[["box",["error"]],["k"]],["error"]]],[11,"kind","","Returns the kind of the error.",5,[[["self"]],["errorkind"]]],[11,"iter","","Iterates over the error chain.",5,[[["self"]],["iter"]]],[11,"backtrace","","Returns the backtrace associated with this error.",5,[[["self"]],["option",["backtrace"]]]],[11,"chain_err","","Extends the error chain with a new entry.",5,[[["self"],["f"]],["error"]]],[11,"description","","A short description of the error. This method is identical to `Error::description()`",5,[[["self"]],["str"]]],[11,"description","","A string describing the error kind.",6,[[["self"]],["str"]]],[0,"module","tvm_frontend","Provides [`Module`] type and methods for working with runtime TVM modules.",N,N],[3,"Module","tvm_frontend::module","Wrapper around TVM module handle which contains an entry function which can be applied to an imported module through [`entry_func`] and to check whether the module has be dropped use [`is_released`].",N,N],[11,"entry_func","","Sets the entry function of a module.",8,[[["self"]]]],[11,"get_function","","Gets a function by name from a registered module.",8,[[["self"],["str"],["bool"]],["result",["function"]]]],[11,"import_module","","Imports a dependent module such as `.ptx` for gpu.",8,[[["self"],["module"]]]],[11,"load","","Loads a module shared library from path.",8,[[["path"]],["result",["module"]]]],[11,"enabled","","Checks if a target device is enabled for a module.",8,[[["self"],["str"]],["bool"]]],[11,"handle","","Returns the underlying module handle.",8,[[["self"]],["tvmmodulehandle"]]],[11,"is_released","","Returns true if the underlying module has been dropped and false otherwise.",8,[[["self"]],["bool"]]],[0,"ndarray","tvm_frontend","This module implements [`NDArray`] type for working with TVM tensors or covertsion from Rust's ndarray to TVM `NDArray`.",N,N],[3,"NDArray","tvm_frontend::ndarray","See the `module-level documentation` for more details.",N,N],[5,"empty","","Creates an empty NDArray given shape, context and dtype.",N,N],[8,"Num32","","A trait for the supported 32bits numerical types in frontend.",N,N],[18,"BITS","","",9,N],[11,"handle","","Returns the underlying array handle.",10,[[["self"]],["tvmarrayhandle"]]],[11,"is_view","","",10,[[["self"]],["bool"]]],[11,"shape","","Returns the shape of the NDArray.",10,[[["self"]],["option"]]],[11,"size","","Returns the total number of entries of the NDArray.",10,[[["self"]],["option",["usize"]]]],[11,"ctx","","Returns the context which the NDArray was defined.",10,[[["self"]],["tvmcontext"]]],[11,"dtype","","Returns the type of the entries of the NDArray.",10,[[["self"]],["tvmtype"]]],[11,"ndim","","Returns the number of dimensions of the NDArray.",10,[[["self"]],["usize"]]],[11,"strides","","Returns the strides of the underlying NDArray.",10,[[["self"]],["option"]]],[11,"is_contiguous","","",10,[[["self"]],["result",["bool"]]]],[11,"byte_offset","","",10,[[["self"]],["isize"]]],[11,"to_vec","","Flattens the NDArray to a Vec of the same type in cpu.",10,[[["self"]],["result",["vec"]]]],[11,"to_bytearray","","Converts the NDArray to [`TVMByteArray`].",10,[[["self"]],["result",["tvmbytearray"]]]],[11,"copy_from_buffer","","Creates an NDArray from a mutable buffer of types i32, u32 or f32 in cpu. ## Example",10,N],[11,"copy_to_ndarray","","Copies the NDArray to another target NDArray.",10,[[["self"],["ndarray"]],["result",["ndarray"]]]],[11,"copy_to_ctx","","Copies the NDArray to a target context.",10,[[["self"],["tvmcontext"]],["result",["ndarray"]]]],[11,"from_rust_ndarray","","Converts a Rust's ndarray to TVM NDArray.",10,[[["arrayd"],["tvmcontext"],["tvmtype"]],["result"]]],[0,"ty","tvm_frontend","This module implements the required conversion from Rust types to TVM types.",N,N],[3,"TVMType","tvm_frontend::ty","See the module-level documentation for more details.",N,N],[12,"inner","","",11,N],[4,"TypeCode","","TVM Type codes",N,N],[13,"kDLInt","","",12,N],[13,"kDLUInt","","",12,N],[13,"kDLFloat","","",12,N],[13,"kHandle","","",12,N],[13,"kNull","","",12,N],[13,"kTVMType","","",12,N],[13,"kTVMContext","","",12,N],[13,"kArrayHandle","","",12,N],[13,"kNodeHandle","","",12,N],[13,"kModuleHandle","","",12,N],[13,"kFuncHandle","","",12,N],[13,"kStr","","",12,N],[13,"kBytes","","",12,N],[0,"value","tvm_frontend","This module implements [`TVMArgValue`] and [`TVMRetValue`] types and their conversions to other support TVMValue. `TVMRetValue` is the owned version of `TVMArgValue`.",N,N],[3,"TVMValue","tvm_frontend::value","Wrapper around underlying TVMValue.",N,N],[3,"TVMArgValue","","This type is needed for passing supported values as arguments to [`call_packed!`] or [`function::Builder`]. Checkout the methods and from conversions.",N,N],[12,"value","","",13,N],[12,"type_code","","",13,N],[3,"TVMRetValue","","TVMRetValue is an owned TVMArgValue.",N,N],[12,"value","","",14,N],[12,"type_code","","",14,N],[11,"to_int","","",15,[[["self"]],["i64"]]],[11,"new","","",13,[[["tvmvalue"],["typecode"]],["self"]]],[11,"to_int","","",13,[[["self"]],["i64"]]],[11,"to_float","","",13,[[["self"]],["f64"]]],[11,"to_bytearray","","",13,[[["self"]],["tvmbytearray"]]],[11,"to_module","","",13,[[["self"]],["module"]]],[11,"to_string","","",13,[[["self"]],["string"]]],[11,"to_ndarray","","",13,[[["self"]],["ndarray"]]],[11,"to_type","","",13,[[["self"]],["tvmtype"]]],[11,"to_ctx","","",13,[[["self"]],["tvmcontext"]]],[11,"to_int","","",14,[[["self"]],["i64"]]],[11,"to_float","","",14,[[["self"]],["f64"]]],[11,"to_bytearray","","",14,[[["self"]],["tvmbytearray"]]],[11,"to_module","","",14,[[["self"]],["module"]]],[11,"to_string","","",14,[[["self"]],["string"]]],[11,"to_ndarray","","",14,[[["self"]],["ndarray"]]],[11,"to_type","","",14,[[["self"]],["tvmtype"]]],[11,"to_ctx","","",14,[[["self"]],["tvmcontext"]]],[14,"register_global_func","tvm_frontend","Convenient macro for registering functions from frontend to backend as global TVM packed functions without overriding. If overriding an existing function is needed use the [`function::register`] function instead.",N,N],[14,"call_packed","","Convenient macro for calling TVM packed functions by providing function identifier and the arguments. This macro outputs a `Result` and let user to perform proper error handling.",N,N],[11,"into","tvm_frontend::function","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"call_box","","",0,N],[11,"into","tvm_frontend::bytearray","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"into","tvm_frontend::context","",3,[[["self"]],["u"]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_string","","",4,[[["self"]],["string"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"into","tvm_frontend::errors","",5,[[["self"]],["u"]]],[11,"to_string","","",5,[[["self"]],["string"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_string","","",6,[[["self"]],["string"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"into","tvm_frontend::module","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"into","tvm_frontend::ndarray","",10,[[["self"]],["u"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"into","tvm_frontend::ty","",11,[[["self"]],["u"]]],[11,"to_string","","",11,[[["self"]],["string"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"to_string","","",12,[[["self"]],["string"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"into","tvm_frontend::value","",15,[[["self"]],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,N],[11,"from","","",15,[[["t"]],["t"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,N],[11,"from","","",13,[[["t"]],["t"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"to_owned","","",14,[[["self"]],["t"]]],[11,"clone_into","","",14,N],[11,"from","","",14,[[["t"]],["t"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"call_once","tvm_frontend::function","",0,N],[11,"default","","",0,[[],["builder"]]],[11,"default","tvm_frontend::context","default device is cpu.",3,[[],["self"]]],[11,"default","","",4,[[],["tvmcontext"]]],[11,"default","tvm_frontend::ty","",12,[[],["self"]]],[11,"eq","tvm_frontend::context","",3,[[["self"],["tvmdevicetype"]],["bool"]]],[11,"ne","","",3,[[["self"],["tvmdevicetype"]],["bool"]]],[11,"eq","","",4,[[["self"],["tvmcontext"]],["bool"]]],[11,"ne","","",4,[[["self"],["tvmcontext"]],["bool"]]],[11,"eq","tvm_frontend::ty","",12,[[["self"],["typecode"]],["bool"]]],[11,"eq","","",11,[[["self"],["tvmtype"]],["bool"]]],[11,"ne","","",11,[[["self"],["tvmtype"]],["bool"]]],[11,"from","tvm_frontend::function","",0,[[["function"]],["self"]]],[11,"from","","",0,[[["module"]],["self"]]],[11,"from","tvm_frontend::bytearray","",2,[[["vec"]],["self"]]],[11,"from","tvm_frontend::context","",3,[[["dldevicetype"]],["self"]]],[11,"from","","",3,[[["str"]],["self"]]],[11,"from","","",4,[[["str"]],["self"]]],[11,"from","","",4,[[["dlcontext"]],["self"]]],[11,"from","tvm_frontend::errors","",5,[[["shapeerror"]],["self"]]],[11,"from","","",5,[[["nulerror"]],["self"]]],[11,"from","","",5,[[["intostringerror"]],["self"]]],[11,"from","","",5,[[["errorkind"]],["self"]]],[11,"from","","",5,[[["str"]],["self"]]],[11,"from","","",5,[[["string"]],["self"]]],[11,"from","","",6,[[["str"]],["self"]]],[11,"from","","",6,[[["string"]],["self"]]],[11,"from","","",6,[[["error"]],["self"]]],[11,"from","","",5,[[["noneerror"]],["self"]]],[11,"from","tvm_frontend::ty","",12,[[["usize"]],["self"]]],[11,"from","","",12,[[["usize"]],["self"]]],[11,"from","","",12,[[["i64"]],["self"]]],[11,"from","","",12,[[["i64"]],["self"]]],[11,"from","","",12,[[["i32"]],["self"]]],[11,"from","","",12,[[["i32"]],["self"]]],[11,"from","","",12,[[["i16"]],["self"]]],[11,"from","","",12,[[["i16"]],["self"]]],[11,"from","","",12,[[["i8"]],["self"]]],[11,"from","","",12,[[["i8"]],["self"]]],[11,"from","","",12,[[["tvmdevicetype"]],["self"]]],[11,"from","","",12,[[["tvmdevicetype"]],["self"]]],[11,"from","","",12,[[["u64"]],["self"]]],[11,"from","","",12,[[["u64"]],["self"]]],[11,"from","","",12,[[["u32"]],["self"]]],[11,"from","","",12,[[["u32"]],["self"]]],[11,"from","","",12,[[["u16"]],["self"]]],[11,"from","","",12,[[["u16"]],["self"]]],[11,"from","","",12,[[["u8"]],["self"]]],[11,"from","","",12,[[["u8"]],["self"]]],[11,"from","","",12,[[["f64"]],["self"]]],[11,"from","","",12,[[["f64"]],["self"]]],[11,"from","","",12,[[["f32"]],["self"]]],[11,"from","","",12,[[["f32"]],["self"]]],[11,"from","","",12,[[["str"]],["self"]]],[11,"from","","",12,[[["str"]],["self"]]],[11,"from","","",12,[[["cstr"]],["self"]]],[11,"from","","",12,[[["cstr"]],["self"]]],[11,"from","","",12,[[["string"]],["self"]]],[11,"from","","",12,[[["string"]],["self"]]],[11,"from","","",12,[[["cstring"]],["self"]]],[11,"from","","",12,[[["cstring"]],["self"]]],[11,"from","","",12,[[["tvmcontext"]],["self"]]],[11,"from","","",12,[[["tvmcontext"]],["self"]]],[11,"from","","",12,[[["tvmtype"]],["self"]]],[11,"from","","",12,[[["tvmtype"]],["self"]]],[11,"from","","",12,[[["function"]],["self"]]],[11,"from","","",12,[[["function"]],["self"]]],[11,"from","","",12,[[["module"]],["self"]]],[11,"from","","",12,[[["module"]],["self"]]],[11,"from","","",12,[[["ndarray"]],["self"]]],[11,"from","","",12,[[["ndarray"]],["self"]]],[11,"from","","",12,N],[11,"from","","",12,N],[11,"from","","",12,[[["tvmbytearray"]],["self"]]],[11,"from","","",12,[[["tvmbytearray"]],["self"]]],[11,"from","","",11,[[["str"]],["self"]]],[11,"from","","",11,[[["dldatatype"]],["self"]]],[11,"from","tvm_frontend::value","",15,[[["usize"]],["self"]]],[11,"from","","",15,[[["usize"]],["self"]]],[11,"from","","",15,[[["i64"]],["self"]]],[11,"from","","",15,[[["i64"]],["self"]]],[11,"from","","",15,[[["i32"]],["self"]]],[11,"from","","",15,[[["i32"]],["self"]]],[11,"from","","",15,[[["i16"]],["self"]]],[11,"from","","",15,[[["i16"]],["self"]]],[11,"from","","",15,[[["i8"]],["self"]]],[11,"from","","",15,[[["i8"]],["self"]]],[11,"from","","",15,[[["u64"]],["self"]]],[11,"from","","",15,[[["u64"]],["self"]]],[11,"from","","",15,[[["u32"]],["self"]]],[11,"from","","",15,[[["u32"]],["self"]]],[11,"from","","",15,[[["u16"]],["self"]]],[11,"from","","",15,[[["u16"]],["self"]]],[11,"from","","",15,[[["u8"]],["self"]]],[11,"from","","",15,[[["u8"]],["self"]]],[11,"from","","",15,[[["bool"]],["self"]]],[11,"from","","",15,[[["bool"]],["self"]]],[11,"from","","",15,[[["f64"]],["self"]]],[11,"from","","",15,[[["f64"]],["self"]]],[11,"from","","",15,[[["f32"]],["self"]]],[11,"from","","",15,[[["f32"]],["self"]]],[11,"from","","",15,[[["str"]],["tvmvalue"]]],[11,"from","","",15,[[["string"]],["tvmvalue"]]],[11,"from","","",15,[[["cstring"]],["tvmvalue"]]],[11,"from","","",15,N],[11,"from","","",15,[[["module"]],["self"]]],[11,"from","","",15,[[["function"]],["self"]]],[11,"from","","",15,[[["ndarray"]],["self"]]],[11,"from","","",15,[[["tvmtype"]],["self"]]],[11,"from","","",15,[[["tvmcontext"]],["self"]]],[11,"from","","",15,[[["tvmdevicetype"]],["self"]]],[11,"from","","",15,[[["tvmbytearray"]],["self"]]],[11,"from","","",13,[[["t"]],["self"]]],[11,"from","","",14,[[["t"]],["self"]]],[11,"clone","tvm_frontend::function","",1,[[["self"]],["function"]]],[11,"clone","","",0,[[["self"]],["builder"]]],[11,"clone","tvm_frontend::bytearray","",2,[[["self"]],["tvmbytearray"]]],[11,"clone","tvm_frontend::context","",3,[[["self"]],["tvmdevicetype"]]],[11,"clone","","",4,[[["self"]],["tvmcontext"]]],[11,"clone","tvm_frontend::module","",8,[[["self"]],["module"]]],[11,"clone","tvm_frontend::ty","",12,[[["self"]],["typecode"]]],[11,"clone","","",11,[[["self"]],["tvmtype"]]],[11,"clone","tvm_frontend::value","",15,[[["self"]],["tvmvalue"]]],[11,"clone","","",13,[[["self"]],["tvmargvalue"]]],[11,"clone","","",14,[[["self"]],["tvmretvalue"]]],[11,"drop","tvm_frontend::function","",1,[[["self"]]]],[11,"drop","tvm_frontend::module","",8,[[["self"]]]],[11,"drop","tvm_frontend::ndarray","",10,[[["self"]]]],[11,"fmt","tvm_frontend::function","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::bytearray","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::context","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::errors","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::module","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::ndarray","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::ty","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::value","",15,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",14,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::context","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::errors","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","tvm_frontend::ty","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"deref","","",11,N],[11,"deref","tvm_frontend::value","",15,N],[11,"deref_mut","tvm_frontend::ty","",11,N],[11,"deref_mut","tvm_frontend::value","",15,N],[11,"hash","tvm_frontend::function","",1,N],[11,"hash","tvm_frontend::context","",3,N],[11,"hash","","",4,N],[11,"hash","tvm_frontend::ty","",12,N],[11,"description","tvm_frontend::errors","",5,[[["self"]],["str"]]],[11,"cause","","",5,[[["self"]],["option",["error"]]]],[11,"new","","",5,[[["errorkind"],["state"]],["error"]]],[11,"from_kind","","",5,N],[11,"with_chain","","",5,[[["e"],["k"]],["self"]]],[11,"kind","","",5,N],[11,"iter","","",5,[[["self"]],["iter"]]],[11,"chain_err","","",5,[[["self"],["f"]],["self"]]],[11,"backtrace","","",5,[[["self"]],["option",["backtrace"]]]],[11,"extract_backtrace","","",5,[[["error"]],["option",["internalbacktrace"]]]]],"paths":[[3,"Builder"],[3,"Function"],[3,"TVMByteArray"],[3,"TVMDeviceType"],[3,"TVMContext"],[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"],[3,"Module"],[8,"Num32"],[3,"NDArray"],[3,"TVMType"],[4,"TypeCode"],[3,"TVMArgValue"],[3,"TVMRetValue"],[3,"TVMValue"]]};
initSearch(searchIndex);
