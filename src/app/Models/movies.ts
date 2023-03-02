export interface Movies {
genres: Genre[];
status: string;
runtime: number;
revenue: number;
    adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: Date;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
}


export interface MovieDto{
  page:number;
  results:Movies[];
  total_results:number;
  total_pages:number;
}

export interface Genre{
  id:number;
  name:string;
}
export interface MovieVideoDto{
  id:number;
  results:MovieVideo[];
}

export interface MovieVideo{
  site:string;
  key:string;
}
export interface MovieImages{
  backdrops:{
  file_path:string;
  }[]
}

export interface MovieCredits{
  cast:{
  name:string;
  profile_path:string;
  
  }[]
}