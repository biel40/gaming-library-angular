import { Injectable } from '@angular/core';
import { PostgrestResponse, SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from './supabase/supabase.service';
import { Videogame } from '../models/videogame';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  private supabaseClient: SupabaseClient;

  constructor(
    private supabaseService: SupabaseService
  ) {
    this.supabaseClient = this.supabaseService.getSupabaseClient();
  }


  public async getVideoGames() : Promise<any> {
    
    const { data, error } = await this.supabaseClient
    .from('videogame')
    .select('*');

    console.log('Data: ', data);

    return data;
  }

  public getVideogame(videogame: Videogame): any {
    return this.supabaseClient
      .from('videogames')
      .select('*')
      .eq('id', videogame.id)
      .single();
  }
}
