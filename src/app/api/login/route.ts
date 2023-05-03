import type { NextApiRequest, NextApiResponse } from 'next'

export async function POST(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try{
        let body = req.body
        console.log(body);
    }catch(e){
        console.log("Execption ",e)
    }
    
    return new Response(JSON.stringify({
        body: req.body
    }))
}
