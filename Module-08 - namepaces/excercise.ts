namespace AllGreetings {
  namespace Greetings {
    export function returnGreeting(greeting: string) {
      console.log(`The message from namespace Greetings is ${greeting}.`);
    }
  }

  namespace GreetingsWithLength {
    export function returnGreeting(greeting: string) {
      let greetingLength = getLength(greeting);
      console.log(
        `The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength}`
      );
    }
    function getLength(message: string): number {
      return message.length;
    }
  }
}
