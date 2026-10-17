import React, { useState } from 'react';
import { PRO_PARTNER_AVATAR } from '../data/mockData';

export const ProDashboardView: React.FC = () => {
  const [isAccepting, setIsAccepting] = useState(true);
  const [earnings, setEarnings] = useState(34800);
  const [jobsCount, setJobsCount] = useState(542);
  const [incomingJobs, setIncomingJobs] = useState([
    {
      id: 'req-101',
      title: 'Split AC Fan Motor & Gas Check',
      time: '15 mins ago',
      urgent: true,
      customer: 'Amit Patel',
      location: 'E-3 Arera Colony, Near Bhojpur Club, Bhopal (1.8 km away)',
      problem: '“AC not blowing cold air since afternoon, error code E3 flashing.”',
      payout: '₹499 + Parts',
      phone: '+919425088991'
    }
  ]);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const handleAction = (jobId: string, action: 'accept' | 'decline') => {
    const job = incomingJobs.find((j) => j.id === jobId);
    if (!job) return;

    if (action === 'accept') {
      setNotificationMsg(
        `Job accepted! Customer ${job.customer} (${job.phone}) notified. Service location routed to ${job.location}.`
      );
      setEarnings((prev) => prev + 499);
      setJobsCount((prev) => prev + 1);
    } else {
      setNotificationMsg(`Job request declined and reassigned to the next verified technician in Bhopal.`);
    }

    setIncomingJobs((prev) => prev.filter((j) => j.id !== jobId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-6 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-[#e2e8f0]">
        {/* Toast / Alert banner if action taken */}
        {notificationMsg && (
          <div className="mb-6 p-4 rounded-xl bg-[#eff4ff] border border-[#2563eb]/30 text-xs sm:text-sm text-[#0b1c30] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2563eb] text-[20px]">
                info
              </span>
              <span>{notificationMsg}</span>
            </div>
            <button
              onClick={() => setNotificationMsg(null)}
              className="text-[#565e74] hover:text-[#0b1c30] p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        )}

        {/* Pro Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#e5eeff]">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={PRO_PARTNER_AVATAR}
                alt="Portrait of Rajesh Sharma, certified Servelink pro partner"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-[#2563eb]/20"
              />
              <span
                className={`absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full ${
                  isAccepting ? 'bg-[#007d55]' : 'bg-[#737686]'
                }`}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline-md text-xl font-bold text-[#0b1c30]">
                  Rajesh Sharma (Pro Partner)
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs bg-[#bdffdb]/40 text-[#006242] font-bold">
                  Verified Technician
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#434655] mt-0.5">
                Electrician &amp; Inverter AC Specialist • Arera Colony, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <div className="text-right">
              <span className="text-[11px] text-[#565e74] block">Availability Status</span>
              <button
                type="button"
                onClick={() => setIsAccepting(!isAccepting)}
                className="flex items-center gap-1.5 font-bold text-xs cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isAccepting ? 'bg-[#007d55] animate-ping' : 'bg-[#ba1a1a]'
                  }`}
                />
                <span className={isAccepting ? 'text-[#006242]' : 'text-[#ba1a1a]'}>
                  {isAccepting ? 'Accepting Bookings' : 'On Break / Offline'}
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => alert('Profile details & certifications verified for 2026-2027.')}
              className="px-4 py-2 bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] text-xs font-semibold rounded-lg border border-[#cbd5e1] cursor-pointer transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Quick Earnings & Stats Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
            <span className="text-xs text-[#565e74] font-medium">This Month Earnings</span>
            <div className="font-headline-lg text-2xl font-bold text-[#0b1c30] mt-1">
              ₹{earnings.toLocaleString('en-IN')}
            </div>
            <span className="text-xs text-[#007d55] flex items-center gap-1 mt-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              +18% from last month
            </span>
          </div>

          <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
            <span className="text-xs text-[#565e74] font-medium">Jobs Completed</span>
            <div className="font-headline-lg text-2xl font-bold text-[#0b1c30] mt-1">
              {jobsCount}
            </div>
            <span className="text-xs text-[#434655] mt-1 flex items-center gap-1">
              <span
                className="material-symbols-outlined text-amber-500 text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              4.92 Customer Star Avg
            </span>
          </div>

          <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
            <span className="text-xs text-[#565e74] font-medium">Acceptance Rate</span>
            <div className="font-headline-lg text-2xl font-bold text-[#0b1c30] mt-1">
              98.4%
            </div>
            <span className="text-xs text-[#004ac6] font-semibold mt-1 block">
              Top Tier in Bhopal
            </span>
          </div>

          <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
            <span className="text-xs text-[#565e74] font-medium">Active Service Radius</span>
            <div className="font-headline-lg text-2xl font-bold text-[#0b1c30] mt-1">
              8.5 km
            </div>
            <span className="text-xs text-[#434655] mt-1 block">
              Bhopal Zone 1 &amp; 2
            </span>
          </div>
        </div>

        {/* Live Job Dispatch Feed for Pro */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-title-sm text-base font-bold text-[#0b1c30]">
              Incoming Customer Requests
            </h3>
            <span className="text-xs bg-[#dbe1ff] text-[#00174b] font-bold px-2.5 py-0.5 rounded-full">
              {incomingJobs.length} New Request{incomingJobs.length !== 1 ? 's' : ''}
            </span>
          </div>

          {incomingJobs.length === 0 ? (
            <div className="p-8 text-center bg-[#eff4ff] rounded-xl border border-dashed border-[#b4c5ff] text-xs text-[#565e74]">
              No pending jobs at this moment. You are visible to customers in Arera Colony and MP Nagar.
            </div>
          ) : (
            incomingJobs.map((job) => (
              <div
                key={job.id}
                className="p-5 bg-white border-2 border-[#2563eb]/30 rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    {job.urgent && (
                      <span className="px-2 py-0.5 bg-[#ffdad6] text-[#ba1a1a] text-[11px] font-bold rounded-full">
                        Urgent
                      </span>
                    )}
                    <span className="font-title-sm text-base font-bold text-[#0b1c30]">
                      {job.title}
                    </span>
                    <span className="text-xs text-[#565e74]">• {job.time}</span>
                  </div>
                  <p className="text-xs text-[#434655]">
                    Customer: <span className="font-semibold text-[#0b1c30]">{job.customer}</span> • {job.location}
                  </p>
                  <p className="text-xs text-[#0b1c30] italic bg-[#eff4ff] p-2 rounded-lg">
                    Problem note: {job.problem}
                  </p>
                  <div className="text-xs font-bold text-[#004ac6]">
                    Estimated Base Payout: {job.payout}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => handleAction(job.id, 'decline')}
                    className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-[#eff4ff] hover:bg-[#ffdad6] hover:text-[#ba1a1a] text-[#0b1c30] transition-colors text-xs font-semibold cursor-pointer border border-[#cbd5e1]"
                  >
                    Decline
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction(job.id, 'accept')}
                    className="flex-1 md:flex-none px-5 py-2 rounded-lg bg-[#2563eb] hover:bg-[#004ac6] text-white transition-colors text-xs font-semibold shadow-sm cursor-pointer"
                  >
                    Accept Job &amp; Call Client
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
