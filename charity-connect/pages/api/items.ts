export default function handler(req: any, res: any) {
  if (req.method === "GET") {
    res.send(JSON.stringify({test:'hello'}))
  } else if (req.method === "POST") {
    res.send(200);
  } else if (req.method === "PUT") {

  } else {

  }
}