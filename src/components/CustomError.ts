/**
 * throw의 인수엔 아무런 제약이 없기 때문에 꼭 에러 클래스를 사용할 필요는 없다.
 * 하지만 instanceof를 사용해서 에러 객체를 식별하는 장점이 생긴다.
 * @link https://ko.javascript.info/custom-errors
 */

/**
 * instanceof
 * custom error:
 * 깔끔하고 일관적인 오류 처리 코드를 작성할 수 있다.
 */
export class MyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

// error의 종류가 다양해지는 것을 대비해서 여러 종류의 에러를 포함하는 혹은 대표하는 에러 클래스를 만들어서 사용할 수 있다.
// error wrapper라고 한다.
// e.g. 로그인 폼에서 발생할 수 잇는 syntax error, validation error, network error 등을 포함하는 에러 클래스
// 하나로 login error라고 해서 한곳에서 전담해서 처리한다.
// 대신 에러를 그렇게 던져줘야 한다.
export class CardError extends MyError {
  cause: Error;

  constructor(message: string, cause: Error) {
    super(message);
    this.cause = cause;
  }
}

export class ValidationError extends MyError {}

export class PropertyRequiredError extends ValidationError {
  property: string;
  constructor(property: string) {
    super("No property: " + property);
    this.property = property;
  }
}

// 사용법
// function readUser(json) {
//   let user = JSON.parse(json);

//   if (!user.age) {
//     throw new ValidationError("No field: age");
//   }
//   if (!user.name) {
//     throw new ValidationError("No field: name");
//   }

//   return user;
// }

// try..catch와 readUser를 함께 사용한 예시

// try {
//   let user = readUser('{ "age": 25 }');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     alert("Invalid data: " + err.message); // Invalid data: No field: name
//   } else if (err instanceof SyntaxError) {
//     // (*)
//     alert("JSON Syntax Error: " + err.message);
//   } else {
//     throw err; // 알려지지 않은 에러는 재던지기 합니다. (**)
//     /**
//      * catch에 알려지지 않은 에러가 있을 때 이 에러는 재 던지기 된다는 점((**))
//      * 또한 주목해서 봐주시기 바랍니다.
//      * catch 블록에선 유효성 검사와 문법 오류만 처리하고,
//      * 다른 종류의 에러는 밖으로 던져야 합니다.
//      */
//   }
// }

/**
 * error.name
 * 나중에 확장성이 떨어진다.
 * 생각했던 ts의 타입추론을 이용할 수도 없다.
 */
