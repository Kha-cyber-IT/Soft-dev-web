import React from 'react';
import { Page, NavigationProps } from '../types';
import { ArrowLeft } from 'lucide-react';

interface InfoPageProps extends NavigationProps {
  page: Page;
}

export const InfoPages: React.FC<InfoPageProps> = ({ page, setPage }) => {
  const BackButton = ({ label, target }: { label: string; target: Page }) => (
    <button onClick={() => setPage(target)} className="mb-8 text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-2">
      <ArrowLeft size={20} /> {label}
    </button>
  );

  // PAGE 2: ABOUT US
  if (page === Page.AboutUs) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20">
        <BackButton label="Back to Mission" target={Page.Home} />
        <h3 className="text-3xl font-bold text-blue-300 mb-6 uppercase font-heading tracking-widest">About us</h3>
        <p className="mb-4 text-lg">Our mission is simple. To bring the Truth of Jesus Christ to the world.</p>
        <p className="mb-8 text-lg">How do we do that? Through evangelism, discipleship, and church planting.</p>
        
        <div className="space-y-6 mb-12">
            <div className="glass-card-blue p-6 rounded-2xl">
                <p><strong className="font-bold text-blue-300 uppercase tracking-wider font-heading">Evangelism:</strong> Because the world is full of lost souls who need to hear the truth of Jesus Christ.</p>
            </div>
            <div className="glass-card-blue p-6 rounded-2xl">
                <p><strong className="font-bold text-blue-300 uppercase tracking-wider font-heading">Discipleship:</strong> Because every believer needs to be trained for the ministry of the Gospel.</p>
            </div>
            <div className="glass-card-blue p-6 rounded-2xl">
                <p><strong className="font-bold text-blue-300 uppercase tracking-wider font-heading">Church Planting:</strong> Because our greatest impact will be in the cities and nations outside our own that we can reach.</p>
            </div>
        </div>

        <h3 className="text-3xl font-bold text-blue-300 mb-6 uppercase font-heading tracking-widest">Our History</h3>
        <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p>The Potter's House Christian Church of Eldorado Park was founded in 1997, and has served this community and eventually, all of Southern Africa since. We are part of Christian Fellowship Ministries. Our churches go by the names: The Door, The Potter's House, Victory Chapel and others.</p>
            <p>Started in Prescott, AZ in the early 1970's during the Jesus People movement, we have been focused on reaching those that have been rejected by the religious world.</p>
            <p>When the church world didn't know what to do with the hippies getting saved, CFM was training them and putting them into the ministry.</p>
            <p>Since then, the fellowship has planted churches across the globe, in more than 100 nations and has multiplied to more than 3,700 churches world-wide, including more than 100 in South Africa alone.</p>
            <p>Our goal in every nation we reach is to build an indigenous church: Training local leaders to reach their nation for Jesus.</p>
        </div>

        <div className="text-center">
            <button onClick={() => setPage(Page.Ministries)} className="bg-blue-600 text-white font-bold py-3 px-12 rounded-full shadow-xl hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading">
                MINISTRIES
            </button>
        </div>
      </div>
    );
  }

  // PAGE 5: OUR STAFF
  if (page === Page.OurStaff) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20">
        <BackButton label="Back to Mission" target={Page.Home} />
        <h3 className="text-3xl font-bold text-blue-300 mb-10 text-center uppercase tracking-widest underline underline-offset-8 font-heading">Leadership Staff</h3>

        <div className="space-y-16">
            <StaffMember 
                img="https://i.postimg.cc/nzRsKyqs/Jonathan-and-Rachel-Heimberg.jpg"
                name="Jonathan Heimberg"
                role="Senior Pastor"
                bio="Jonathan Heimberg is the Pastor of The Potter's House Christian Fellowship Church of Eldorado Park. He and his wife Rachel have been married for 26 years, and have five children and five grandchildren. They both experienced life-changing conversions at a young age. The Heimberg's ministry began in Las Vegas, NV, after which they spent two and a half years as missionaries in Bangalore, India, pioneering a now indigenous church planting church. From there, they pastored the church planting congregation in Hobbs, New Mexico, and then spent 8 years in Gallup, New Mexico leading the conference center there."
            />
            <StaffMember 
                img="https://i.postimg.cc/g0ryCH4R/Leebon-and-Charneil-Britde.jpg"
                name="Leebon Britde"
                role="Associate Pastor"
                bio="Leebon and his wife, Charneil both experienced life changing conversions in the Eldorado Park church as young people. They have pastored for several years, and are now part of the pastoral staff in Eldos. Pastor Britde ministers in preaching, counseling, and various administrative tasks in the Eldorado Park church."
            />
            <StaffMember 
                img="https://i.postimg.cc/C5b9jgqM/STAFF-PHOTOS-5.jpg"
                name="Edward Mphaga"
                role="Assistant Pastor"
                bio="Edward and Vuyiswa Mphaga are serving the Eldorado Park congregation with their children. Ed oversees the follow-up and visitation ministry, and also assists in counseling, preaching, and ministering to the congregation. Ed and Vee both experienced life-changing conversions and have served in ministry for several years."
            />
            <StaffMember 
                img="https://i.postimg.cc/SsgnkBsf/Sanele-and-Cathleen-Mofokeng.jpg"
                name="Sanele Mofokeng"
                role="Choose to Change Director"
                bio="Sanele oversees the Choose to Change addiction recovery ministry. He was saved through the Choose to Change ministry, and his wife, Cathleen was saved as a teenager in the Eldorado Park church. This vital need in Eldorado Park simply reflects the larger need in our society. Their mission is to shepherd addicts through their conversion and rehabilitation into a productive life and a fruitful future in the Kingdom of God. Sanele and Cathleen are both evidence of the power of Jesus Christ to transform lives!"
            />
            <StaffMember 
                img="https://i.postimg.cc/44KcX36d/STAFF-PHOTOS-6.jpg"
                name="Nkosinathi Nxala"
                role="Outreach Director"
                bio="Nkosinathi and Kitso were both born again at The Potter's House Church in Eldorado Park. Called by God to preach the gospel, today, Nkosinathi leads the various outreach ministries of the Eldos church, and they are looking forward to preach the gospel as pioneer pastors."
            />
        </div>

        <div className="flex justify-center mt-16">
            <button onClick={() => setPage(Page.ChurchPlanting)} className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading">
                Church Planting
            </button>
        </div>
      </div>
    );
  }

  // PAGE 4: NEW BUILDING
  if (page === Page.NewBuilding) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20">
        <BackButton label="Back to Mission" target={Page.Home} />
        <div className="text-center mb-8">
            <h3 className="inline-block bg-teal-600 text-white text-xl font-bold py-2 px-8 rounded-full shadow-md uppercase tracking-widest border border-white/10 font-heading">
                TIME TO ENLARGE
            </h3>
        </div>

        <div className="space-y-6 text-lg leading-relaxed mb-10 text-center">
            <p className="font-bold text-2xl text-blue-300">Announcing the enlarged Eldorado Park Conference Center</p>
            <p>Our facility was built in 2002 to facilitate our Southern Africa Bible Conferences, and for 23 years it has been a blessing to all that God has done in our nation and regions beyond. However, it can no longer hold all that God is doing.</p>
            <p>This new Conference Center will enable all that God is doing in the Eldorado Park church, as well as help to facilitate the National Conferences for years to come.</p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img src="https://i.postimg.cc/kgYf78NP/Exterior-Arrival.jpg" alt="Building rendering" className="w-full h-auto" />
        </div>

        {/* Carousel Placeholder */}
        <div className="overflow-x-auto flex space-x-4 pb-8 scrollbar-hide mb-10">
            {[
              "https://i.postimg.cc/WbwXdxVj/Entrance-Arrival.jpg",
              "https://i.postimg.cc/kgYf78NP/Exterior-Arrival.jpg",
              "https://i.postimg.cc/9QgJcTdK/Exterior-2.jpg",
              "https://i.postimg.cc/sfPmvb9d/Exterior.jpg",
              "https://i.postimg.cc/C1kNCQ3w/Interior-Lumen.jpg",
              "https://i.postimg.cc/dtB5SgL3/Int-to-pulpit-lumen.jpg",
              "https://i.postimg.cc/RVRgb2NZ/Foyer-lumen.jpg",
              "https://i.postimg.cc/SNyr8VV3/Foyer.jpg"
            ].map((img, i) => (
              <img key={i} src={img} alt={`View ${i+1}`} className="h-64 w-auto rounded-xl shadow-lg border border-white/10 shrink-0" />
            ))}
        </div>

        <div className="text-center mb-10">
            <span className="inline-block bg-blue-600 text-white font-bold py-2 px-10 rounded-full shadow-md text-xl uppercase tracking-widest font-heading">
                View 3D Simulation
            </span>
        </div>
        
        <div className="space-y-8 mb-16">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <iframe src="https://player.vimeo.com/video/1139268450?h=0c6709779e&title=0&byline=0&portrait=0" className="absolute inset-0 w-full h-full" allowFullScreen></iframe>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <iframe src="https://player.vimeo.com/video/1139268799?h=0c6709779e&title=0&byline=0&portrait=0" className="absolute inset-0 w-full h-full" allowFullScreen></iframe>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <iframe src="https://player.vimeo.com/video/1139268892?h=0c6709779e&title=0&byline=0&portrait=0" className="absolute inset-0 w-full h-full" allowFullScreen></iframe>
            </div>
        </div>

        <div className="glass-card-blue p-8 rounded-3xl text-center space-y-6">
            <p className="text-lg leading-relaxed">
                To invest in this project, you can give electronically via the banking details below. Alternatively, you can mail your gift to:
            </p>

            <div className="flex justify-center my-6">
                 <img src="https://i.postimg.cc/8CG9vL77/Giving-2022.jpg" alt="Giving Details" className="w-full max-w-2xl rounded-2xl shadow-xl border border-white/10" />
            </div>
            
            <div className="bg-black/40 p-6 rounded-xl inline-block border border-white/10 font-bold">
                <p className="text-xl text-blue-300">Portent Suite #88</p>
                <p className="text-xl">Private Bag x1510</p>
                <p className="text-xl">Glenvista, 2058</p>
            </div>
            
            <p className="text-lg text-white/70 italic">
                To participate in our 6-month building pledge, send a note with the amount you are committing to give to: <a href="mailto:joburg@worldcfm.com" className="text-blue-400 underline">joburg@worldcfm.com</a>
            </p>
        </div>
      </div>
    );
  }

  // PAGE 6: CHURCH PLANTING
  if (page === Page.ChurchPlanting) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20">
        <BackButton label="Back to Staff" target={Page.OurStaff} />
        <h3 className="text-3xl font-bold text-blue-300 mb-8 uppercase text-center underline underline-offset-8 font-heading">Church Planting</h3>

        <div className="space-y-6 text-lg leading-relaxed mb-10">
            <p><strong className="text-blue-300 font-heading">The Potter's House of Eldorado Park is actively involved in church planting across the globe.</strong></p>
            <p>Our entire ministry is focused on making disciples to reach the desperate people of the world. We believe in the dignity of the local church, and that Biblical church growth is patterned not by mega-churches in large cities, but by the training of disciples in the local church who pioneer their own congregations.</p>
            <p>Biblical growth is via multiplication, not conglomeration. Church planting is wholly supported by, financed by, and staffed by the converts and disciples of the local church, and it is through this process that Christian Fellowship Ministries has grown to more than 3,700 churches around the world.</p>
            <p>Here in Eldorado Park, through the planting of our own couples, and the continuing commitment to plant churches by our daughter churches, we have grown to more than 100 churches in South Africa, with many active missionaries across Southern Arica, and indigenous workers in several nations.</p>
            <p>The Eldorado Park congregation has been instrumental in reaching many nations in our region, and we are constantly striving to extend the reach of the gospel in Southern Africa and beyond!</p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-12 border-2 border-white/10">
            <img src="https://i.postimg.cc/kXJBBX8g/502a78-3f260f5175d047d2ba1f844398a2e390-mv2.jpg" alt="Global Map" className="w-full h-auto opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl md:text-5xl font-black text-white mb-4 text-shadow-strong uppercase tracking-wider font-heading">3,700 locations and growing!</h3>
                <p className="text-lg md:text-xl text-gray-100 font-medium text-shadow-strong">With nearly 4,000 churches around the world, we are witnessing a move of God across our world!</p>
            </div>
        </div>

        <div className="text-center">
            <p className="text-xl font-semibold mb-6">Learn how you can be a part of the worldwide impact</p>
            <button onClick={() => setPage(Page.Give)} className="bg-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-2xl hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading">Online Giving</button>
        </div>
      </div>
    );
  }

  // PAGE 12: STATEMENT OF FAITH
  if (page === Page.StatementOfFaith) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20">
        <BackButton label="Back to Stories" target={Page.Stories} />
        
        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img src="https://i.postimg.cc/7ZSqn28Z/1763582310556.jpg" alt="Bible Study" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong text-center uppercase tracking-widest font-heading">What we believe and why it matters.</h3>
            </div>
        </div>
        
        <div className="flex justify-center mb-12 px-4">
            <div className="bg-blue-900/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10 max-w-3xl text-center">
                <p className="text-lg leading-relaxed text-white font-medium">
                    In a world full of opinions and so much uncertainty, it is so important to be grounded in Truth. God's Word is the solid foundation on which we can build our lives and make the best decision for our future.
                </p>
            </div>
        </div>

        <div className="glass-card-blue p-8 md:p-12 rounded-3xl space-y-10">
            <h3 className="text-3xl font-bold text-blue-300 uppercase tracking-widest text-center font-heading">Statement of Faith</h3>

            <FaithDetail title="Salvation" content="Salvation is initiated by a prayer of faith in Jesus. Salvation is completed by God's grace. Salvation is maintained by a lifestyle of Biblical righteousness. Salvation is demonstrated by works. Salvation is lost when we sin and do not repent. Salvation is necessary to enter Heaven in eternity." />
            
            <FaithDetail title="Water Baptism" content="Water Baptism was exemplified by Christ. Water Baptism is not necessary to be saved, but is definitely an important Christian experience not to be ignored. Water Baptism is a public demonstration of faith in Jesus Christ. Water Baptism is executed in the name of the Father, the Son, and the Holy Ghost." />

            <FaithDetail title="Holy Spirit Baptism" content="Holy Spirit Baptism is evidenced by speaking in tongues. (Acts 2:4; Acts 10:45-46) Holy Spirit Baptism is an experience different and distinct from Salvation or Water Baptism. (Acts 1:5; Acts 10:44)" />

            <div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4 uppercase tracking-wider font-heading">Our Responsibility</h4>
                <p className="mb-6 italic">As believers, there are four primary responsibilities we are called to uphold: Prayer, Outreach, Reading the Bible, and Fellowship.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/5 rounded-xl">
                        <h5 className="font-bold text-blue-300 font-heading">Daily Prayer:</h5>
                        <p>Seeking God in prayer is a fundamental necessity of maintaining our relationship with Him.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <h5 className="font-bold text-blue-300 font-heading">Outreach:</h5>
                        <p>Sharing the Gospel of Jesus Christ with others.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <h5 className="font-bold text-blue-300 font-heading">Reading The Bible:</h5>
                        <p>Feeding our spirit with the Word of God, and living thereby.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <h5 className="font-bold text-blue-300 font-heading">Fellowship:</h5>
                        <p>Gathering together in a local assembly of believers for worship and admonition.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // PAGE 13: OUR VISION
  if (page === Page.OurVision) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20">
        <BackButton label="Back to Conference" target={Page.Conference2025} />
        
        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img src="https://i.postimg.cc/RFYD6g0D/502a78-76d146b4c54b4977a6f70a02c24ec4f3-mv2.jpg" alt="Vision Background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/30">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong text-center uppercase tracking-widest font-heading">See what drives our church and everything we do.</h3>
            </div>
        </div>

        <div className="glass-card-blue p-8 md:p-12 rounded-3xl space-y-10">
            <h3 className="text-3xl font-bold text-blue-300 uppercase tracking-widest text-center font-heading">Our Vision</h3>
            <VisionPoint title="Evangelism" content="The Gospel taken outside the four walls is the absolute foundation of our church, in obedience to Mark 16:15 And He said to them, ‘Go into all the world and preach the gospel to every creature'… We emphasize personal evangelism, and a large variety of outreaches to share the Gospel." />
            <VisionPoint title="Conversion" content="We witness, testify and preach for a decision. The Gospel has the power to save and transform lives. 1 Peter 1:23 having been born again... The bulk of our congregation consists of people converted here by the Power of God." />
            <VisionPoint title="The Local Church" content="God has placed everything necessary to accomplish His will in the setting of the local church. Ephesians 1:22-23 …the church. Which is his body, the fullness of him who fills everything in every way." />
            <VisionPoint title="Discipleship" content="God intends for calling to be accomplished through being trained and equipped within the setting of a local church. Therefore, the highest calling is to obey God’s command in Matthew 28:19-20." />
            <VisionPoint title="Church Planting" content="The result of disciples being raised up is that they be released into the harvest field. Matthew 9:37-38. We send couples to plant brand new congregations, with the aim of reproducing our vision in a new area." />
            <VisionPoint title="World Evangelism" content="From the earliest Bible record, God’s vision is worldwide testimony and impact. The gospel message God has revealed to us works and is relevant in every nation and culture of the world. Mark 16:15... Matthew 28:19..." />
        </div>
      </div>
    );
  }

  return null;
};

const StaffMember = ({ img, name, role, bio }: { img: string; name: string; role: string; bio: string }) => (
    <div className="glass-card-blue rounded-3xl overflow-hidden shadow-xl border border-white/10">
        <div className="flex flex-col md:flex-row items-center">
            <img src={img} alt={name} className="w-full md:w-1/3 aspect-square object-cover" />
            <div className="p-8 md:p-10 flex-1">
                <h4 className="inline-block bg-teal-600 text-white text-lg font-bold py-2 px-6 rounded-full mb-3 border border-white/10 font-heading">{name}</h4>
                <p className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-wider font-heading">{role}</p>
                <p className="text-lg leading-relaxed text-white/80">{bio}</p>
            </div>
        </div>
    </div>
);

const FaithDetail = ({ title, content }: { title: string; content: string }) => (
    <div>
        <h4 className="text-2xl font-bold text-blue-300 mb-3 uppercase tracking-wider font-heading">{title}:</h4>
        <p className="text-lg leading-relaxed text-white/80">{content}</p>
    </div>
);

const VisionPoint = ({ title, content }: { title: string; content: string }) => (
    <div className="border-l-4 border-blue-500 pl-6">
        <h4 className="text-2xl font-bold text-blue-300 mb-3 uppercase tracking-wider font-heading">{title}:</h4>
        <p className="text-lg leading-relaxed text-white/80">{content}</p>
    </div>
);