```javascript
// app/middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const { params } = req;

  if (params.id) {
    // Manipulate the request based on the id param
    console.log("middleware handling: ", params.id);
    return NextResponse.rewrite(new URL(`/page/${params.id}`, req.url))
  }
}

export const config = {
  matcher: ['/page/:id'],
};

// app/page/[id].js

export default function Page({params}) {
  return (
    <div>Page {params.id}</div>
  );
}
```