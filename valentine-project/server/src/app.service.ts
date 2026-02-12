import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AppService {
  private supabase: SupabaseClient;

  constructor() {
  this.supabase = createClient(
    process.env.SUPABASE_URL!,  // <--- Add the ! here
    process.env.SUPABASE_KEY!   // <--- Add the ! here
  );
}

  async getMessages() {
    const { data } = await this.supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });
    return data;
  }

  async createMessage(name: string, message: string) {
    return await this.supabase.from('guestbook').insert([{ name, message }]);
  }

  async updateMessage(id: string, message: string) {
    return await this.supabase
      .from('guestbook')
      .update({ message })
      .eq('id', id);
  }

  async deleteMessage(id: string) {
    return await this.supabase.from('guestbook').delete().eq('id', id);
  }
}