
import React, { useState } from 'react';
import { Language, TranslationStrings, User } from '../types';
import { UserCircle, Mail, Phone, Calendar, Clock, Edit3, ShieldCheck, Activity, Zap, CheckCircle, Key, ArrowRight } from 'lucide-react';

interface ProfileProps {
  user: User;
  lang: Language;
  t: TranslationStrings;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const Profile: React.FC<ProfileProps> = ({ user, lang, t, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleSave = () => {
    setUser({ ...user, ...formData });
    setIsEditing(false);
  };

  return (
    <section className="py-12 md:py-20 px-5 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Profile Header Block */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 p-8 shadow-sm overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
            <Zap size={100} className="text-red-600" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-24 h-24 bg-red-600/5 dark:bg-red-600/10 rounded-3xl flex items-center justify-center text-red-600 border border-red-600/20">
                <UserCircle size={48} />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-zinc-900 flex items-center justify-center">
                <CheckCircle size={10} className="text-white" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-600 font-english">Active Subscription</span>
                <ShieldCheck size={12} className="text-red-600" />
              </div>
              <h2 className={`text-4xl font-black text-zinc-900 dark:text-white leading-tight ${lang === 'bn' ? 'font-bengali' : 'font-english uppercase italic tracking-tightest'}`}>{user.name}</h2>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-english opacity-60">ID: GOTI-NX-{Math.floor(Math.random() * 90000 + 10000)}</p>
            </div>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-6 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-zinc-900/10"
            >
              <Edit3 size={16} />
              <span>{isEditing ? 'Cancel Edit' : 'Manage Profile'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-7 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 p-8">
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest font-english flex items-center gap-2">
                   <Activity size={12} className="text-red-600" /> Personal Identity
                 </h3>
               </div>
               
               {isEditing ? (
                 <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-zinc-500 uppercase font-english ml-1">Legal Full Name</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs font-bold outline-none focus:border-red-600 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-zinc-500 uppercase font-english ml-1">Email Endpoint</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs font-bold outline-none focus:border-red-600 transition-colors" />
                    </div>
                    <button onClick={handleSave} className="w-full py-4 bg-red-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest mt-2 hover:bg-black transition-colors">Apply Changes</button>
                 </div>
               ) : (
                 <div className="grid gap-4">
                    <div className="flex items-center gap-5 p-6 bg-zinc-50 dark:bg-zinc-950 rounded-[1.5rem] border border-zinc-100 dark:border-zinc-800 group hover:border-red-600/30 transition-all">
                      <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-red-600 shadow-sm"><Mail size={20}/></div>
                      <div className="overflow-hidden">
                        <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] font-english mb-1">Communication Channel</p>
                        <p className="font-bold text-sm font-english truncate">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 p-6 bg-zinc-50 dark:bg-zinc-950 rounded-[1.5rem] border border-zinc-100 dark:border-zinc-800 group hover:border-red-600/30 transition-all">
                      <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-red-600 shadow-sm"><Phone size={20}/></div>
                      <div>
                        <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] font-english mb-1">Registered Mobile</p>
                        <p className="font-bold text-sm font-english tracking-tight">{user.phone}</p>
                      </div>
                    </div>
                 </div>
               )}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-zinc-900 p-8 rounded-[2.5rem] text-white border border-zinc-800 relative overflow-hidden group shadow-xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <Zap size={32} className="text-red-600" />
                    <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[8px] font-black text-green-500 uppercase tracking-widest">Active</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest font-english mb-2">Current Package</p>
                    <p className={`text-2xl font-black text-white leading-tight ${lang === 'bn' ? 'font-bengali' : 'font-english uppercase italic'}`}>{user.activePackage}</p>
                  </div>
                  <div className="pt-6 border-t border-white/5 space-y-5">
                     <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-zinc-500 uppercase font-english">Next Renewal</span>
                        <span className="text-xs font-black font-english text-zinc-200">{user.expiryDate}</span>
                     </div>
                     <button className="w-full py-5 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg shadow-red-600/10">Quick Renew</button>
                  </div>
               </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-[1.5rem] border border-zinc-100 dark:border-zinc-800 flex items-center justify-between group hover:border-red-600/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-950 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all"><Key size={16} /></div>
                <div>
                  <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest font-english">Access PIN</p>
                  <span className="text-sm font-black font-english tracking-[0.4em]">****</span>
                </div>
              </div>
              <ArrowRight size={14} className="text-zinc-300 group-hover:text-red-600 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
