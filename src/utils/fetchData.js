export const options = {
    method: 'GET',
    
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'b9e8eac236msh2581a49617a18f4p12b821jsn451551b48181',
      'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
    }
  };

  export const fetchData= async (url ,options)=>{


    const response = await fetch(url ,options)
    const data = await response.json()

    return data;
  }