export function POST(req: any, res: any) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log('here');
    res.send(200);
  } else {
    // Handle any other HTTP method
  }
}