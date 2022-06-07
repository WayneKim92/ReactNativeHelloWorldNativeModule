#import "RCTPrimitiveModule.h"
#import <React/RCTLog.h>

@implementation RCTPrimitiveModule

RCT_EXPORT_METHOD(helloWorld)
{
  // add a console log in the method so you can confirm it has been invoked from JavaScript in your React Native application
  RCTLogInfo(@"Hello World");
  RCTLog(@"Hello World");
}

RCT_EXPORT_METHOD(helloX:(NSString *)value)
{
  // add a console log in the method so you can confirm it has been invoked from JavaScript in your React Native application
  RCTLogInfo(@"Hello %@", value);
}


// To export a module named RCTPrimitiveModule
// If you do not specify a name, the JavaScript module name will match the Objective-C class name,
// with any "RCT" or "RK" prefixes removed.
RCT_EXPORT_MODULE();

// The native module can then be accessed in JS like this:
// const { CalendarModuleFoo } = ReactNative.NativeModules;

@end
