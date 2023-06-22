export default function handler(req, res) {
  if (req.method === "GET") {
    res.send(JSON.stringify({test:'hello'}))
  } else if (req.method === "POST") {
    console.log(req.body);
    res.send(200);
  } else if (req.method === "PUT") {

  } else {

  }
}