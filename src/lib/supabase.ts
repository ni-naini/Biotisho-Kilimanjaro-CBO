import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // Database types
// export interface Donation {
//   id: string;
//   amount: number;
//   currency: string;
//   frequency: 'one-time' | 'monthly';
//   donor_name?: string;
//   donor_email: string;
//   donor_phone?: string;
//   message?: string;
//   is_anonymous: boolean;
//   flutterwave_tx_ref: string;
//   flutterwave_tx_id?: string;
//   status: 'pending' | 'successful' | 'failed' | 'cancelled';
//   created_at: string;
//   updated_at: string;
// }

// Donation service functions
// export const donationService = {
//   // Create a new donation record
//   async createDonation(donationData: Omit<Donation, 'id' | 'created_at' | 'updated_at'>) {
//     try {
//       const { data, error } = await supabase
//         .from('donations')
//         .insert([donationData])
//         .select()
//         .single();

//       if (error) {
//         console.error('Supabase insert error:', JSON.stringify(error, null, 2));
//         throw new Error('Failed to create donation record: ' + error.message);
//       }
//       return data;
//     } catch (err) {
//       console.error('Error in createDonation:', err);
//       throw err;
//     }
//   },

//   // Update donation status after payment
//   async updateDonationStatus(
//     txRef: string, 
//     status: 'successful' | 'failed' | 'cancelled',
//     flutterwaveTxId?: string
//   ) {
//     const updateData: any = { status };
//     if (flutterwaveTxId) {
//       updateData.flutterwave_tx_id = flutterwaveTxId;
//     }

//     const { data, error } = await supabase
//       .from('donations')
//       .update(updateData)
//       .eq('flutterwave_tx_ref', txRef)
//       .select()
//       .single();

//     if (error) {
//       console.error('Error updating donation status:', error);
//       throw new Error('Failed to update donation status');
//     }

//     return data;
//   },

//   // Get donation by transaction reference
//   async getDonationByTxRef(txRef: string) {
//     const { data, error } = await supabase
//       .from('donations')
//       .select('*')
//       .eq('flutterwave_tx_ref', txRef)
//       .single();

//     if (error) {
//       console.error('Error fetching donation:', error);
//       return null;
//     }

//     return data;
//   },

//   // Get all donations
//   async getAllDonations(limit = 50, offset = 0) {
//     const { data, error } = await supabase
//       .from('donations')
//       .select('*')
//       .order('created_at', { ascending: false })
//       .range(offset, offset + limit - 1);

//     if (error) {
//       console.error('Error fetching donations:', error);
//       throw new Error('Failed to fetch donations');
//     }

//     return data;
//   }
// };
