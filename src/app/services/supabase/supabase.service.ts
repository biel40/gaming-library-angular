import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { environment } from 'src/app/environment/environment'

import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  private supabaseClient: SupabaseClient
  public _session: AuthSession | null = null

  constructor() {
    this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  get session() {
    this.supabaseClient.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  profile(user: User) {
    return this.supabaseClient
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabaseClient.auth.onAuthStateChange(callback)
  }

  signIn(email: string) {
    return this.supabaseClient.auth.signInWithOtp({ email })
  }

  signOut() {
    return this.supabaseClient.auth.signOut()
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabaseClient.from('profiles').upsert(update)
  }
}