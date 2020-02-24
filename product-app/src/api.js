import request from 'superagent';
export async function getCars(id){
    const url = `https://nameless-journey-14679.herokuapp.com/api/cars/${id}`;
    return await request.get(url);
}