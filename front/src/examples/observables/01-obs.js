const { Observable } = require("rxjs");

const o = new Observable((subscriber) => {
  subscriber.next(123);
  subscriber.next(456);
  const timer = setTimeout(() => {
    console.log("inside timeout");
    subscriber.next("coucou");
    // subscriber.error(new Error("oups"));
    subscriber.complete();
  }, 1000);

  return () => {
    console.log("housekeep");
    clearTimeout(timer);
  };
});

const s = o.subscribe({
  next: (data) => {
    console.log("data: ", data);
  },
  error: (err) => {
    console.log("err: ", err);
  },
  complete: () => {
    console.log("complete");
  },
});

setTimeout(() => {
  s.unsubscribe();
}, 500);
