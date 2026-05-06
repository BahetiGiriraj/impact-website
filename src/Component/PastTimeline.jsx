import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import july2425 from '/src/assets/pastevents/timeline_24-25/July.jpg';
import august2425 from '/src/assets/pastevents/timeline_24-25/Aug.jpg';
import september2425 from '/src/assets/pastevents/timeline_24-25/Sept.jpg';
import october2425 from '/src/assets/pastevents/timeline_24-25/Oct.jpg';
import november2425 from '/src/assets/pastevents/timeline_24-25/Nov.jpg';
import december2425 from '/src/assets/pastevents/timeline_24-25/Dec.jpg';
import january2425 from '/src/assets/pastevents/timeline_24-25/Jan.jpg';
import february2425 from '/src/assets/pastevents/timeline_24-25/Feb.png';
import march2425 from '/src/assets/pastevents/timeline_24-25/Marc.webp';
import april2324 from '/src/assets/pastevents/timeline_23-24/Apr.png';
import may2324 from '/src/assets/pastevents/timeline_23-24/May.png';
import june2324 from '/src/assets/pastevents/timeline_23-24/Jun.png';
import july2324 from '/src/assets/pastevents/timeline_23-24/Jul.png';
import august2324 from '/src/assets/pastevents/timeline_23-24/Aug.png';
import september2324 from '/src/assets/pastevents/timeline_23-24/Sep.png';
import october2324 from '/src/assets/pastevents/timeline_23-24/Oct.png';
import november2324 from '/src/assets/pastevents/timeline_23-24/Nov.jpg';
import january2324 from '/src/assets/pastevents/timeline_23-24/Jan.png';
import february2324 from '/src/assets/pastevents/timeline_23-24/Feb.png';
import march2324 from '/src/assets/pastevents/timeline_23-24/Mar.png';

// EventModal Component
const EventModal = ({ isOpen, onClose, event }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4 max-h-[90vh] flex flex-col">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-black p-3 sm:p-4 md:p-6 flex-shrink-0">
          <div className="text-center">
            <p className="text-xs opacity-90 mb-1 sm:mb-2">Event Topic</p>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">{event.title}</h2>
            {event.date && (
              <p className="text-xs opacity-90 mt-1 sm:mt-2">{event.date}</p>
            )}
          </div>
          <div className="flex justify-between items-start mt-3 sm:mt-4 text-xs sm:text-sm gap-2">
            <div className="flex-1">
              {event.resourcePersons && event.resourcePersons.length > 0 && (
                <div>
                  <h4 className="font-semibold opacity-90 mb-1">Resource Persons</h4>
                  <div className="opacity-80">
                    {event.resourcePersons.map((person, index) => (
                      <p key={index} className="text-xs sm:text-sm leading-tight">{person}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 text-right">
              {event.venue && (
                <div>
                  <h4 className="font-semibold opacity-90 mb-1">Venue</h4>
                  <p className="text-xs sm:text-sm opacity-80">{event.venue}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="border-l-4 border-purple-500 pl-2 sm:pl-3 md:pl-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">Event Description</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {event.description || "This was an exciting event organized by the student council."}
              </p>
            </div>
            {event.highlights && event.highlights.length > 0 && (
              <div className="border-l-4 border-orange-500 pl-2 sm:pl-3 md:pl-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">Event Highlights</h3>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-600">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {event.additionalInfo && (
              <div className="border-l-4 border-blue-500 pl-2 sm:pl-3 md:pl-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">Additional Information</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {event.additionalInfo}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border-t flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="text-xs sm:text-sm text-gray-500">
              Event organized in {event.month}
            </div>
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors text-xs sm:text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CompanyTimeline() {
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const academicYears = ['2023-24', '2024-25', '2025-26'];
  const currentYearIndex = academicYears.indexOf(selectedYear);

  const timelineData = {
    '2023-24': {
      'Jun': [
        {
          id: 1,
          month: 'June',
          image: june2324,
          title: 'International Day of Yoga and Gender Sensitization Workshop',
          details: [
            {
              text: 'International Day of Yoga',
              description: 'The celebration of Yoga Day was a wonderful event that brought together yoga enthusiasts and practitioners from various backgrounds to embrace the ancient practice of yoga. The event aimed to promote physical, mental, and spiritual well-being through the art of yoga on a day dedicated to holistic wellness.',
              date: 'June 21, 2023',
              venue: 'World Peace Dome',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Sunita Karad', 'Prof. Dr. Mahesh Chopade', 'Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Workshop on Gender Sensitization',
              description: 'The Gender Sensitization session was held with the aim of fostering awareness and understanding of gender-related issues among attendees, particularly focusing on women seafarers.',
              date: 'June, 2023',
              venue: 'MANET Building',
              resourcePersons: ['Dr. Atul Patil', 'Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Jul': [
        {
          id: 2,
          month: 'July',
          image: july2324,
          title: 'Sports and Awareness Programs',
          details: [
            {
              text: '5th Board of Sports Committee Meeting',
              description: 'The 5th Board of Sports Committee meeting convened with a primary focus on fostering and encouraging active student participation in various sports events.',
              date: 'July 11, 2023',
              venue: 'Sports Complex',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Session on NPTEL Awareness',
              description: 'The National Programme on Technology Enhanced Learning (NPTEL) organized an awareness session for students and faculty to introduce them to the various opportunities and benefits offered by NPTEL.',
              date: 'July 12, 2023',
              venue: 'RK Auditorium',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Orientation Session for Club Activities',
              description: 'The inaugural kick-off meeting for clubs and chapters provided an innovative platform for students to initiate change within the academic landscape.',
              date: 'July 18, 2023',
              venue: 'Sports Complex MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Workshop on "Who Wants to be an ENTREPRENEUR"',
              description: '"Who Wants to be an ENTREPRENEUR" is an exciting and educational event designed to inspire the spirit of entrepreneurship among aspiring business enthusiasts.',
              date: 'July 20, 2023',
              venue: 'Prof. H. Kumar Vyas Seminar Hall, MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. H. Kumar Vyas']
            },
            {
              text: 'National Workshop on IPR and Patent Facilitation',
              description: 'In the present world characterized by the primacy of innovation and creativity, the significance of intellectual property rights cannot be overstated.',
              date: 'July 20, 2023',
              venue: 'Prof. H. Kumar Vyas Seminar Hall, MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. H. Kumar Vyas']
            },
            {
              text: 'Cycling Expedition to Malhargad',
              description: 'The Cycling Expedition to Malhargad was an exhilarating and adventurous event that captivated cycling enthusiasts with its scenic route and challenging terrain.',
              date: 'July 22, 2023',
              venue: 'Malhargad Fort',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Mr. Sandeep Bhapkar']
            },
            {
              text: 'Anti-drug Awareness Program Collaboration with Maharashtra Police Pune',
              description: 'A collaborative Anti-Drug Awareness Program was recently organized at MIT ADT University in Pune to address the escalating issue of drug abuse among youngsters.',
              date: 'July 27, 2023',
              venue: 'N518 Hall, MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Ganesh Pathak', 'Wg. Cdr. Menon']
            }
          ]
        }
      ],
      'Aug': [
        {
          id: 3,
          month: 'August',
          image: august2324,
          title: 'Adventure and Innovation Events',
          details: [
            {
              text: 'Adventurous Trek to AADRAI JUNGLE & KALU WATERFALL',
              description: 'The AADRAI JUNGLE & KALU WATERFALL expedition, organized by the MIT Adventure Club, was an exciting mix of adventure, nature, and camaraderie.',
              date: 'August 4, 2023',
              venue: 'AADRAI JUNGLE & KALU WATERFALL',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Rajkumar Patil']
            },
            {
              text: 'Club Bazaar',
              description: 'The Club Bazaar event, held at the university, was a vibrant showcase of innovation, enthusiasm, and a collective vision for positive change. Over 75+ diverse clubs participated.',
              date: 'August 09, 2023',
              venue: 'MIT SFT foyer',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Virendra Bhojwani', 'Dr. Rakesh Siddheswar']
            },
            {
              text: 'SITARA Innovation and Startup Summit 2023',
              description: 'The SiTARA National Innovation & Startup Summit 2023 was held at the MIT-ADT University in Pune in partnership with various industry players.',
              date: 'August 10, 2023',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Idea Expo: Poster/Drawing Competition',
              description: 'The Idea Expo\'s Poster/Drawing Competition was a vibrant showcase of creativity and innovation that brought together a diverse group of participants.',
              date: 'August 10, 2023',
              venue: 'N518',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Neha Zope']
            },
            {
              text: 'Workshop on Drone Making',
              description: 'The workshop on Drone Making was an exciting and educational experience that brought together enthusiasts, students, and professionals.',
              date: 'August 11, 2023',
              venue: 'N518',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Neha Zope']
            },
            {
              text: 'National Sports Day Celebration',
              description: 'The National Sports Day Celebration was a magnificent event that brought together athletes, sports enthusiasts, and communities from all over the nation.',
              date: 'August 23, 2023',
              venue: 'Sports Complex MIT ADT University',
              resourcePersons: ['Arjuna Awardee Manoj Pingle', 'Prof. Dr. Suraj Bhoyar', 'Prof. Padmakar Phad']
            },
            {
              text: 'Live Streaming - of Chandrayaan 3 Landing',
              description: 'India launched the Chandrayaan-3 mission, led by the Indian Space Research Organization (ISRO). Eventually, the spacecraft successfully touched down on the moon\'s south pole.',
              date: 'August 23, 2023',
              venue: 'RK Auditorium',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Sep': [
        {
          id: 4,
          month: 'September',
          image: september2324,
          title: 'Cultural and Technical Festivals',
          details: [
            {
              text: 'Janmashtami Celebration',
              description: 'Janmashtami is a revered Hindu festival that celebrates the birth of Lord Krishna. The festival takes place in August or September, depending on the lunar calendar.',
              date: 'September 07, 2023',
              venue: 'Vishwa Roop Devata Mandir',
              resourcePersons: ['Prof. Dr. Sunita Karad', 'Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Ganesh Festival',
              description: 'Ganesh Chaturthi celebrates the birth of Lord Ganesha. The celebrations begin with the installation of elaborately crafted clay idols of Lord Ganesha.',
              date: 'September 2023',
              venue: 'Institute of Design Lawn',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Nachiket Thakur']
            },
            {
              text: 'Smart India Hackathon Internal Rounds',
              description: 'The Smart India Hackathon Internal Rounds is a highly competitive event organized by the Ministry of Education and AICTE.',
              date: '25 September 2023',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Rekha Sugandhi', 'Dr. Virendra Bhojwani', 'Prof. Suresh Kapare']
            },
            {
              text: 'Adventurous Trek to DEVKUND WATERFALL',
              description: 'The MIT Adventure Club recently organized an exciting trip to Devkund Waterfall, providing participants with a perfect blend of adventure, nature, and companionship.',
              date: 'September 29, 2023',
              venue: 'DEVKUND WATERFALL',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Raj Kumar Patil']
            }
          ]
        }
      ],
      'Oct': [
        {
          id: 5,
          month: 'October',
          image: october2324,
          title: 'Cultural Celebrations and Sports Championships',
          details: [
            {
              text: 'Garba Night',
              description: 'The campus of MIT ADT University was filled with vibrant energy during the Garba Night, an annual cultural event that combined the rich traditions of Gujarat with the rhythmic beats of taal.',
              date: 'October 19-20, 2023',
              venue: 'Sports Ground MIT ADT University',
              resourcePersons: ['Prof. Dr. Sunita Karad', 'Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'SPECTRA Cultural Night',
              description: 'SPECTRA Culture Night was a magnificent event that took place under the night sky to celebrate Kojagiri Purnima.',
              date: 'October 20, 2023',
              venue: 'Sports Complex MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'PERA Premier Championship',
              description: 'The PERA Premier Championship 2023 witnessed the participation of more than 35+ universities and institutes from Maharashtra.',
              date: 'October 23, 2023',
              venue: 'Sports Complex MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Padmakar Phad', 'Prof. Hanumant Pawar']
            },
            {
              text: 'Adventurous Trek to Harishchandragad',
              description: 'The night trek to Harishchandragad, organized by the MIT Adventure Club, was an exhilarating and unforgettable experience.',
              date: 'October 28, 2023',
              venue: 'HARISHCHANDRAGAD',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Rajesh Jadhav']
            }
          ]
        }
      ],
      'Nov': [
        {
          id: 6,
          month: 'November',
          image: november2324,
          title: 'Community Service and Educational Visits',
          details: [
            {
              text: 'Blood Donation Camp',
              description: 'The Blood Donation Camp was a huge success, highlighting the community\'s spirit of altruism and compassion.',
              date: 'November 3, 2023',
              venue: 'IT Library',
              resourcePersons: ['Prof. Dr. Mahesh Chopade', 'Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Shrikant Gunjal']
            },
            {
              text: 'Visit to Tata Central Archives',
              description: 'The students had an enriching and immersive experience during their visit to the Tata Central Archives.',
              date: 'November 22, 2023',
              venue: 'Tata Central Archives',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Jayashree Prasad']
            }
          ]
        }
      ],
      'Jan': [
        {
          id: 8,
          month: 'January',
          image: january2324,
          title: 'New Year Celebrations and Cultural Events',
          details: [
            {
              text: 'MOU with Kafila',
              description: 'Kafila Adventures and MIT Art, Design, and Technology University officially sealed a visionary Memorandum of Understanding (MoU) on January 1, 2024.',
              date: 'January 01, 2024',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Plogathon',
              description: 'The Plogathon Drive, hosted by MIT Art, Design and Technology University, brought the attention to the imperative need for sustainable practices and environmental consciousness.',
              date: 'January 10, 2024',
              venue: 'RAMDARA TEMPLE',
              resourcePersons: ['Mrs. Nirmala Thormote', 'Miss. Ritu Kedia', 'Shri. Yogesh Shinde', 'Shri. Aniket Thormote', 'Shri. Tejas Karad']
            },
            {
              text: 'Swami Vivekananda Jayanti',
              description: 'On the occasion of Swami Vivekananda Jayanti, the campus was filled with energy and purpose as students and faculty organized a lively rally.',
              date: 'January 12, 2024',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Atul Patil', 'Mr. Chinmay Moghe']
            },
            {
              text: 'Mini Marathon',
              description: 'The Mini Marathon that took place at MIT-ADT University was an enormous success. Participants from different backgrounds came together on campus to promote the importance of a healthy mind and body.',
              date: 'January 25, 2024',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Sunita Karad', 'Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Atul Patil', 'Prof. Dr. Tejas Karad']
            },
            {
              text: 'Student Council Initiation Meeting',
              description: 'The "Kick Off the Student Council Journey" event held at MIT-ADT University was aimed at empowering the newly formed Student Council.',
              date: 'January 30, 2024',
              venue: 'S113 IT Building',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Ullas Malawade', 'Prof. Dr. Pratibha Jagtap']
            }
          ]
        }
      ],
      'Feb': [
        {
          id: 9,
          month: 'February',
          image: february2324,
          title: 'Cultural Festivities and Academic Programs',
          details: [
            {
              text: 'Shiv Jayanti',
              description: 'The Shiv Jayanti celebration was a vibrant and culturally enriching event that paid homage to the legendary Maratha warrior, Chhatrapati Shivaji Maharaj.',
              date: 'February 19, 2024',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Sunita Karad', 'Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Atul Patil']
            },
            {
              text: 'SciFEST - National Science Day Celebration',
              description: 'The SciFest 2024, a two-day symposium that brought together over 50 schools from across Maharashtra.',
              date: 'February 27, 2024',
              venue: 'MIT IoD Lawn',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Virendra Bhojwani', 'Prof. Dr. Rakesh Sidheswar']
            },
            {
              text: 'Club CATALYST',
              description: 'The air was charged with excitement and anticipation as MIT ADT University hosted its flagship event, CATALYST. More than 35 clubs from various disciplines participated.',
              date: 'February 28, 2024',
              venue: 'MIT IoD Lawn',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Anant Chakradeo']
            },
            {
              text: 'SPECTRA 3.0 - Cultural Night',
              description: 'SPECTRA 3.0 was a cultural event that took place at MIT ADT University on the evening of February 28, 2024.',
              date: 'February 28, 2024',
              venue: 'MIT IoD Lawn',
              resourcePersons: ['W. Cd. Mohan Menon', 'Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Mar': [
        {
          id: 10,
          month: 'March',
          image: march2324,
          title: 'Spring Activities and Cultural Celebrations',
          details: [
            {
              text: 'Helmet Janjagruti Abhiyan',
              description: 'In the crisp morning air of MIT ADT University, the campus buzzed with energy and purpose as students gathered for the Helmet Janjagurti Abhiyan.',
              date: 'March 06, 2024',
              venue: 'Main Gate MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Swapnil Shrishat']
            },
            {
              text: 'Excursion Tour',
              description: 'The Excursion Tour to Lonavala was a remarkable journey of discovery and rejuvenation amidst serene hills and verdant landscapes.',
              date: 'March 13, 2024',
              venue: 'Lonavla',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Holika Dahan',
              description: 'The Holika Dahan event was a resounding success, weaving together tradition, celebration, and community spirit into an unforgettable evening.',
              date: 'March 24, 2024',
              venue: 'TuckShop Lawn',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Apr': [
        {
          id: 11,
          month: 'April',
          image: april2324,
          title: 'Spring Cultural Events and Innovation Summits',
          details: [
            {
              text: 'Gudi Padwa Celebration (Folk Dance Competition)',
              description: 'The grand celebration began with the Dhol Tasha Performance by Shiravya Dhol Tasha Pathak, marking the commencement of the GudiPadwa Celebration.',
              date: 'April 05, 2024',
              venue: 'MIT IoD Lawn',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Shri Tejas Karad', 'MS ADITI']
            },
            {
              text: 'Representation of 4th Elets Innovation Summit 2024',
              description: 'The eLets Education Innovation Summit convened a distinguished gathering of thought leaders, educators, and innovators.',
              date: 'April 12, 2024',
              venue: 'Hotel Radisson Blu',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'May': [
        {
          id: 12,
          month: 'May',
          image: may2324,
          title: 'Community Service and Educational Initiatives',
          details: [
            {
              text: 'Transforming Education and Inclusion through Mural Art by MIT SOFA Students at Aniket Sevabhavi Institute',
              description: 'A four-day laudatory event "Educational Transformation through Art Education" at Aniket Sevabhavi Sanstha was successfully completed through joint efforts.',
              date: 'May 20, 2024',
              venue: 'Aniket Sevabhavi Sanstha',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Milind Dhobale']
            }
          ]
        }
      ]
    },
    '2024-25': {
      'Jul': [
        {
          id: 13,
          month: 'July',
          image: july2425,
          title: 'Summer Programs and Green Initiatives',
          details: [
            {
              text: 'Orientation of Alumni 2024-25',
              description: 'The highly-anticipated Alumni Meeting successfully convened former students of our esteemed institution, fostering stronger connections and collaboration within our alumni community.',
              date: '17/07/2024',
              venue: '401 ISBJ Office of Student Affairs',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Sanket Bapat']
            },
            {
              text: 'Inauguration - Green Campus Initiative',
              description: 'MIT ADT University is pleased to announce the successful implementation of its Green Campus Initiative, in alignment with the Government of India\'s Fit India Movement.',
              date: '15/07/2024',
              venue: 'Main Gate - Campus',
              resourcePersons: ['Prof. Dr. Mohit Dubey', 'Dr. Mahesh Chopade', 'Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Atul Patil']
            },
            {
              text: 'Nasha Mukta Abhiyan - Bhira Village',
              description: 'MIT ADT University\'s Office of Student Affairs successfully organized an awareness campaign trekking event as part of the \'Nasha Mukt Bharat Abhiyan\'.',
              date: '13/07/2024',
              venue: 'Bhira Village',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'World Youth Skills Day Celebration',
              description: 'In celebration of World Youth Skills Day, MIT ADT University proudly hosted the Career Catalyst Workshop, a landmark event dedicated to empowering students.',
              date: '15/07/2024',
              venue: 'RK Auditorium',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Anjali Boayte']
            },
            {
              text: 'Cycling Wari - Pune to Pandharpur',
              description: 'The Cycle Waari of Lord Vithala was an inspiring and spiritually enriching event that brought together cycling enthusiasts on a remarkable 210 km journey.',
              date: '15/07/2024',
              venue: 'Malhargad',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Mr. Sandeep Bhapkar']
            }
          ]
        }
      ],
      'Aug': [
        {
          id: 14,
          month: 'August',
          image: august2425,
          title: 'Foundation Celebrations and Leadership Development',
          details: [
            {
              text: 'Club Orientation Meeting',
              description: 'The Office of Student Affairs hosted a highly engaging and motivating Student Club Orientation meeting, led by Dr. Suraj Bhoyar.',
              date: '01/08/2024',
              venue: '405- Seminar Hall',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: '42nd Foundation Day Celebration - MAEERS Group of Institution',
              description: 'MIT Art, Design, and Technology University celebrated its 42nd Foundation Day with a blood donation campaign, reflecting the institution\'s dedication to community service.',
              date: 'August 05, 2024',
              venue: 'MIT SFT Foyer & Reading Hall New IT Building',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Atul Patil', 'Prof. Hanumant Pawar']
            },
            {
              text: 'CLUB CATALYST',
              description: 'CLUB CATALYST, the flagship event of MIT ADT University, was proudly organized by the Office of Student Affairs. This dynamic event brought together over 50+ student clubs.',
              date: '10/08/2024',
              venue: 'Bharat Ratna APJ Abdul Kalam Mandapam',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Sunita Karad', 'Prof. Dr. Mahesh Chopade']
            },
            {
              text: 'Pedal for Freedom: Cycle for Green and Drug-Free Tomorrow',
              description: 'On August 15, 2024, MIT ADT University marked the 78th Independence Day with "Pedal for Freedom: Cycle for a Green and Drug-Free Tomorrow."',
              date: '15/08/2024',
              venue: 'MIT - ADT University',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Suraj Bhoyar', 'Prof Padmakar Phad']
            }
          ]
        }
      ],
      'Sep': [
        {
          id: 15,
          month: 'September',
          image: september2425,
          title: 'Student Leadership and National Programs',
          details: [
            {
              text: 'IMPACT Student Council - Interview',
              description: 'The MIT-IMPACT Student Council election process for the academic year 2024-25 witnessed an overwhelming response, with 85 enthusiastic students nominating themselves.',
              date: '12 - 19 September 2024',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Viksit Bharat',
              description: 'On 25th September, the student council of MIT ADT University participated in the \'Viksit Bharat\' event, hosted at MIT World Peace University (MIT WPU).',
              date: '25th September 2024',
              venue: 'MIT ADT University',
              resourcePersons: ['Shri ANURAG JI (Ministry of Sports and Youth Affairs)', 'Prof. Dr. Suraj Bhoyar', 'Prof. Aditya Kedari']
            },
            {
              text: 'Mega Blood Donation Camp',
              description: 'On 26th September 2024, the NSS Cell and NCC Cell of MIT ADT University organized a Mega Blood Donation Camp to mark the occasion of Engineers\' Day.',
              date: '26th September 2024',
              venue: 'Library Hall, 3rd floor IT building',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Maj. Suman Kumari', 'Prof. Vishal Patil']
            },
            {
              text: 'Tree Plantation Drive',
              description: 'On 27th September 2024, MIT ADT University organized the event "Ek Ped Maa ke Naam" near the iconic MIT World Peace Dome.',
              date: '27th September 2024',
              venue: 'MIT World Peace Dome',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Shri HARDEEP SINGH PURI', 'Prof. Dr. Mangesh Karad']
            },
            {
              text: "Teacher's Day",
              description: 'ACES and IGNITE joined forces to honor the dedication and hard work of our esteemed faculty members.',
              date: '6/09/2024',
              venue: 'MIT SOC',
              resourcePersons: ['Prof. Dr. Ramchandra Pujeri', 'Dr. Rekha Sugandhi', 'Prof. Tanuja Zhende']
            }
          ]
        }
      ],
      'Oct': [
        {
          id: 16,
          month: 'October',
          image: october2425,
          title: 'Festival Celebrations and Creative Workshops',
          details: [
            {
              text: 'MIT ADT Dandiya Nights Day-1',
              description: 'The MIT Samarth Ramdas Swami Sports Complex was abuzz with excitement as the vibrant beats of dandiya and garba filled the air during the much-awaited MIT ADT Dandiya Nights on 8th October 2024.',
              date: '8th October 2024',
              venue: 'MIT Samarth Ramdas Swami Sports Complex',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Sunita Karad', 'Dr. Mahesh Chopade']
            },
            {
              text: 'MIT ADT Dandiya Nights Day-2',
              description: 'The MIT Samarth Ramdas Swami Sports Complex was buzzing with energy as students gathered for MIT ADT Dandiya Nights on 9th October 2024.',
              date: '9th October 2024',
              venue: 'MIT Samarth Ramdas Swami Sports Complex',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Mangesh Karad', 'Prof. Dr. Sunita Karad']
            },
            {
              text: 'Art Therapy Workshop',
              description: 'On October 22, 2024, MIT ADT University hosted an inspiring art therapy workshop in the SCIL Hall, organized by the Office of Student Affairs.',
              date: '22nd October 2024',
              venue: 'SCIL hall',
              resourcePersons: ['Prof. Teresa Joshy', 'Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Deepotsav',
              description: 'The School of Holistic Development organized a vibrant celebration of Diwali, titled "Deepotsav 2024," on October 23 at the RK Auditorium.',
              date: '23rd October 2024',
              venue: 'RK Auditorium',
              resourcePersons: ['School of Holistic Development']
            },
            {
              text: 'ADT Master Chef Competition',
              description: 'On World Food Day, the MIT ADT community gathered at the MANET Mess Kitchen for an unforgettable culinary experience—the ADT MasterChef Competition.',
              date: '16th October, 2024',
              venue: 'MANET Mess Kitchen',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Shri Krishna Yadav', 'Dr. Fiyaj Pathan']
            },
            {
              text: 'PROTECT YOUR IDEA - Session on Intellectual Property',
              description: 'On 14th October 2024, the Office of Student Affairs at MIT ADT University organized an enlightening session on Intellectual Property (IP).',
              date: '14th October 2024',
              venue: 'MANET 2nd Floor',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Nov': [
        {
          id: 17,
          month: 'November',
          image: november2425,
          title: 'Civic Engagement and Social Awareness Programs',
          details: [
            {
              text: 'Spectra 8.0',
              description: 'MIT ADT University hosted the eighth edition of SPECTRA, a magnificent showcase of talent, creativity, and innovation.',
              date: 'November 2024',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Debate Competition',
              description: 'The Electoral Literacy Club organized an engaging debate on "Voting and Election Campaigns: A Citizen\'s Responsibility" on 11th November 2024.',
              date: '11th November 2024',
              venue: 'ISBJ Seminar Hall',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Ashok Ghuge', 'Prof. Dilkirat Sarna']
            },
            {
              text: 'Voting Awareness Drive',
              description: 'The NSS Cell of MIT ADT University organized an impactful awareness drive at Pune Station on 18th November 2024 to promote the importance of voting.',
              date: '18/11/2024',
              venue: 'Pune Station',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Vishal Patil']
            },
            {
              text: 'Blood Donation Campaign',
              description: 'MIT ADT University organized a remarkable Blood Donation Drive, conducted in collaboration with the Armed Forces Medical College (AFMC).',
              date: '28/11/2024',
              venue: 'IT Building',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Dr. Vipul Dala', 'Dr. Dilkirat Sarna', 'Dr. Atul Patil']
            }
          ]
        }
      ],
      'Dec': [
        {
          id: 18,
          month: 'December',
          image: december2425,
          title: 'Cultural Festivals and Fitness Campaigns',
          details: [
            {
              text: 'Preparatory Meeting for 38th West Zone Youth Festival',
              description: 'A preparatory meeting for the 38th West Zone Youth Festival was conducted under the guidance of Prof. Dr. Suraj Bhoyar.',
              date: '12/12/2024',
              venue: 'ISBJ Seminar Hall',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Reshma Gosavi', 'Prof. Yogesh Bhadke']
            },
            {
              text: 'FIT India Cycling Campaign',
              description: 'MIT-ADT University successfully hosted the second phase of the FIT India Cycling Campaign, promoting health, sustainability, and community engagement.',
              date: '22/12/24',
              venue: 'MIT ADT Sports Complex',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Colonel Chandrashekhar Sathe (Retd.)', 'Prof. Padmakar Phad', 'Prof. Dr. Atul Patil']
            },
            {
              text: 'Fit India Cycling Initiative',
              description: 'MIT ADT University actively participated in the nationwide launch of the Fit India Cycling Tuesdays Campaign on 17th December 2024.',
              date: '17/12/24',
              venue: 'MIT ADT Sports Complex',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Mangesh Karad', 'Prof. Padmakar Phad']
            }
          ]
        }
      ],
      'Jan': [
        {
          id: 19,
          month: 'January',
          image: january2425,
          title: 'New Year Programs and Youth Celebrations',
          details: [
            {
              text: 'National Youth Celebration',
              description: 'MIT-ADT University hosted National Youth Day 2025 with great enthusiasm, celebrating the energy and potential of youth in building India\'s future.',
              date: '12/01/25',
              venue: 'RK Auditorium',
              resourcePersons: ['Dr. Mahesh Chopade', 'Prof. Dr. Suraj Bhoyar', 'Dr. Hanumant Pawar', 'Prof. Padmakar Phad']
            },
            {
              text: '38th AIU Inter University Youth Festival',
              description: 'The 38th AIU Inter-University Youth Festival was held at Ganpat University, Mehsana, Gujarat, from 4th to 8th January 2025.',
              date: '4th January - 8th January',
              venue: 'Ganpat University, Gujarat',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Confluence 2025',
              description: 'The MIT ADTU Alumni Association hosted its eagerly anticipated Alumni Meet, Confluence 2025, on January 6, 2025.',
              date: '06/01/25',
              venue: 'Dr.APJ Abdul Kalam Seminar Hall',
              resourcePersons: ['Prof. Dr Sunita Karad', 'Prof. Dr. Ramchandra Pujeri', 'Prof. Dr. Mohit Dube', 'Dr. Harshit Desai', 'Prof. Sanket Bapat', 'Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Feb': [
        {
          id: 20,
          month: 'February',
          image: february2425,
          title: 'Cultural Heritage and Leadership Events',
          details: [
            {
              text: 'Hindavi Swarajya Killa Spardha',
              description: 'MIT-ADT University witnessed an extraordinary celebration of history, creativity, and teamwork with the Hindavi Swarajya Killa Spardha 2025.',
              date: '13/02/2025',
              venue: 'IT Building Entrance',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Shiv Jayanti Celebration',
              description: 'MIT Art, Design, and Technology University celebrated the birth anniversary of Chhatrapati Shivaji Maharaj with unparalleled enthusiasm on 19th February 2025.',
              date: '19/02/25',
              venue: 'MANET Building',
              resourcePersons: ['Prof. Dr. Mangesh Karad', 'Prof. Dr. Sunita Karad', 'Dr. Rajesh S', 'Prof. Dr. Atul Patil', 'Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Mar': [
        {
          id: 21,
          month: 'March',
          image: march2425,
          title: 'Festival Planning and Strategic Meetings',
          details: [
            {
              text: 'Preparatory Meeting for Persona 2025',
              description: 'A crucial preparatory meeting for Persona 2025, the much-anticipated fest of MIT ADT University, was held on 3rd March 2025.',
              date: '03/03/2025',
              venue: 'Dr. APJ Abdul Kalam Seminar Hall',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Persona Planning Meet',
              description: 'A strategic meeting was held on 4th March 2025 to initiate the planning of the highly anticipated Persona Fest at MIT ADT University.',
              date: '04/03/2025',
              venue: 'MANET 4th Floor Auditorium',
              resourcePersons: ['Prof. Dr. Rajesh S']
            }
          ]
        }
      ]
    },
    '2025-26': {
      'Jul': [
        {
          id: 22,
          month: 'July',
          image: july2425,
          title: 'Guru Pournima & Career Catalyst Workshop',
          details: [
            {
              text: 'Board of Sports Meeting',
              description: 'The Board of Sports Meeting for the Academic Year 2025-26 was convened by the Office of Student Affairs to lay the groundwork for a vibrant and competitive sports calendar. The meeting brought together sports coordinators, faculty representatives, and student leaders to review the previous year\'s achievements, identify areas for improvement, and chart a comprehensive plan for the year ahead. Key agenda items included scheduling inter-departmental tournaments, identifying talent for university-level competitions, and discussing infrastructure requirements for various sports. The meeting also focused on encouraging broader student participation across disciplines, promoting a culture of fitness and sportsmanship on campus. Strategies for effective communication and outreach were discussed to ensure maximum student awareness and engagement. The session concluded with clear action points and a shared commitment to making the academic year a landmark one for sports at MIT ADT University.',
              date: '14 Jul 2025',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Trek N Trail - Devkund',
              description: 'Organized by the Office of Student Affairs and MIT Adventure Club, the Devkund Waterfall Trek was a one-day excursion involving 40 enthusiastic participants. The trek led through the picturesque Bhira village near Tamhini Ghat, featuring dense forests, rocky paths, shallow streams, and dramatic cliffs. Participants departed from MIT ADT University at 10:30 PM, arriving at the base village by 3:00 AM to prepare for a 6:00 AM start. The group reached the majestic Devkund Waterfall by 8:00 AM, enjoying the misty monsoon weather and tranquil surroundings. The event highlighted the importance of teamwork, preparedness, and safety while navigating challenges such as slippery paths and early morning fatigue. Beyond the physical challenge, the trek promoted eco-conscious travel and a deep respect for nature. The experience concluded with a return to campus at 5:15 PM, providing students with a rejuvenating escape into the wild and a memorable adventure that combined endurance with nature exploration.',
              date: '19 Jul 2025',
              venue: 'Bhira, Tamhini Ghat, Pune',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Career Catalyst Workshop',
              description: 'The Career Catalyst Workshop was a professionally curated event organized by the Office of Student Affairs to bridge the gap between academic learning and industry expectations. The workshop brought together career counsellors, industry professionals, and alumni mentors to guide students through the nuances of career planning, resume building, interview preparation, and professional networking. Interactive sessions covered topics such as identifying personal strengths, exploring diverse career pathways, and understanding the evolving job market. Students participated in mock interviews, group discussions, and one-on-one mentoring sessions that provided them with actionable insights and practical tools. The workshop also featured panel discussions where successful alumni shared their journeys, challenges, and advice for navigating the professional world. The event was attended by students from various departments and was widely appreciated for its practical, hands-on approach to career development. Participants left with a clearer sense of direction, enhanced confidence, and a stronger professional network.',
              date: '27 Jul 2025',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Aug': [
        {
          id: 23,
          month: 'August',
          image: august2425,
          title: 'Club CATALYST, SPECTRA 12.0 & More',
          details: [
            {
              text: 'Club CATALYST',
              description: 'Organized by the Student Affairs Department, Club CATALYST served as a flagship platform for student clubs to showcase their entrepreneurial spirit, innovative ideas, and collaborative initiatives to the wider university community. The core objective was to foster a culture of leadership, creativity, and positive change within the campus ecosystem. The inauguration was graced by distinguished guests including Prof. Dr. Suresh Gosavi, Vice-Chancellor of Savitribai Phule Pune University, and Prof. Dr. Mangesh Karad, Executive President of MIT-ADT University, whose presence added prestige and inspiration to the event. Over 50 clubs participated, presenting diverse projects spanning technology, science, arts, culture, and social impact through interactive demonstrations, live activities, and engaging stalls. A highlight of the event was the announcement of the "BEST CLUB STUDENT COMMUNITY CHOICE AWARD," determined through a transparent process combining a 50% live student poll and 50% jury evaluation. The event successfully facilitated meaningful networking and collaboration between students, faculty, and guests, reinforcing the university\'s commitment to holistic student development.',
              date: '7 Aug 2025',
              venue: 'Bharat Ratna APJ Abdul Kalam Mandapam, MIT-ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'SPECTRA 12.0',
              description: 'SPECTRA 12.0 was the 12th edition of MIT-ADT University\'s flagship cultural extravaganza, organized as part of "Vidyarambh 2025," the 10th Student Induction Program for the Academic Year 2025-26. The event served as a vibrant and welcoming platform for students to showcase their creativity in dance, music, and performance arts, with the primary aim of integrating the new batch of students into the university\'s rich cultural life. The evening opened with an electrifying flashmob by Groovance that set the tone for a night of celebration and talent. This was followed by captivating solo and group dance performances and soulful solo singing that highlighted the artistic diversity of the university community. A key highlight of the evening was the much-anticipated Mr. & Ms. Fresher contest, where newcomers displayed their talent, confidence, and creativity before a cheering audience. The event also featured a special band performance by "The Boys Group" that had the crowd on their feet. The night concluded with a lively DJ Night dedicated to freshers, fostering a spirit of unity, joy, and belonging as they embarked on their academic journey. With over 2,500 stakeholders benefited, SPECTRA 12.0 successfully promoted teamwork, creativity, and cultural vibrancy across the campus.',
              date: '8 Aug 2025',
              venue: 'Swami Vivekanand Madapam, MIT-ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Blood Donation Drive on 10th Foundation Day',
              description: 'In celebration of the 10th Foundation Day of MIT Art, Design and Technology University, the Office of Student Affairs organized a Mega Blood Donation Camp on August 11, 2025, at the university campus in Loni Kalbhor, Pune. This landmark event demonstrated the university\'s deep commitment to social responsibility and community welfare. The camp was organized in collaboration with Sasoon Blood Bank and Tarpan Blood Bank, ensuring professional medical oversight and safe collection procedures throughout the day. The inauguration was graced by notable dignitaries including Padmashri Dr. Nagarajan Vedachalam, Prof. Dr. N. P. Padhy, and Prof. Dr. Mangesh Karad, whose presence inspired participants and underscored the importance of the initiative. Donors including students, faculty, staff, and community members participated with great enthusiasm. The process was efficiently managed by a dedicated medical team that conducted mandatory preliminary screenings for hemoglobin and blood pressure to ensure donor safety. All donors received refreshments, a mandatory resting period, and a Certificate of Appreciation or Donor Card as a token of gratitude. The initiative successfully collected more than 200 units of blood, benefiting over 250 stakeholders and fostering a lasting culture of service, empathy, and regular blood donation within the university community.',
              date: '11 Aug 2025',
              venue: 'Bharat Ratna APJ Abdul Kalam Mandapam, MIT-ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Formation of MIT-IMPACT Student Council 3.0',
              description: 'The formation of the MIT-IMPACT Student Council Executive Committee 3.0 for the Academic Year 2025-26 was a landmark event that established the official representative body of students under the Office of Student Affairs. The selection process was designed to be rigorous, transparent, and merit-based, unfolding across four carefully structured phases. Phase I involved the shortlisting of 59 candidates from a pool of 128 applications, evaluated on the basis of eligibility criteria and the quality of their Statement of Purpose. Phase II was an activity-based evaluation in which 45 shortlisted candidates were assessed on their teamwork, leadership, and initiative while volunteering at major university events including Vidyarambh 2025 and the Mega Blood Donation Drive. Phase III consisted of in-depth panel interviews conducted by senior faculty members to gauge each candidate\'s vision, institutional awareness, and commitment to student welfare. Phase IV involved the top 6 candidates engaging in a direct interaction with senior university leadership, including the Vice Chancellor. The entire process culminated in a democratic election held on August 14, 2025, using a secret ballot system to elect the President and Vice President. Sharvil Vikas Maind was elected as President and Mugdha Sonawane was appointed as General Secretary, marking the beginning of a new chapter of student leadership at MIT ADT University.',
              date: '14 Aug 2025',
              venue: 'MIT ADT University Campus',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Rajesh S.', 'Prof. Dr. Atul Patil']
            },
            {
              text: 'Ganesh Festival 2025',
              description: 'The Ganesh Festival 2025 at MIT ADT University was a five-day celebration of devotion, culture, and community spirit, meticulously coordinated by the Office of Student Affairs. The festivities commenced with Ganesh Sthapana on 27th August 2025 at 11:00 AM, attended by university leadership including Prof. Dr. Mangesh Karad and Dr. Suraj Bhoyar. Lord Ganesha was welcomed with a grand and vibrant procession featuring the Shivray and Gajkaran Dhol Tasha Pathak, whose rhythmic beats filled the campus with festive energy. Daily rituals included Aarati performed every morning at 9:15 AM and every evening at 5:30 PM, with participation from various university departments on a rotational basis, fostering a sense of collective devotion and institutional unity. The cultural and devotional highlights of the festival included a soulful Bhajan Sandhya on 28th August, a spectacular "Kalaangan 2K25" cultural evening on 29th August that showcased student talent in music, dance, and drama, and a creative Rangoli and Painting Competition on 30th August that drew enthusiastic participation from students and staff alike. The festival concluded on 31st August 2025 with a grand Mahaarti and a colourful Visarjan procession at 3:00 PM, bringing the celebrations to a joyful and memorable close. The event successfully fostered community spirit, cultural connection, and provided a vibrant creative platform for the entire university family.',
              date: '27 Aug 2025 – 31 Aug 2025',
              venue: 'MIT SFT Foyer, MIT-ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Sep': [
        {
          id: 24,
          month: 'September',
          image: september2425,
          title: "Onavesham 2.0, Engineer's Day & Dandiya Nights",
          details: [
            {
              text: 'Onavesham 2.0',
              description: 'Onavesham 2.0 was a grand cultural celebration organized by the Office of Student Affairs at MIT-ADT University to mark the traditional Kerala harvest festival of Onam. The event aimed to promote cultural awareness, inclusivity, and unity by connecting students from Kerala to their roots while introducing the wider university community to the rich and vibrant traditions of Kerala. The festivities were spread across multiple iconic venues on campus, creating an immersive cultural experience for all attendees. The celebrations included a beautifully crafted Pookalam (floral carpet) competition that drew creative entries from students across departments, a traditional vegetarian Onam Sadhya feast served on banana leaves that offered an authentic taste of Kerala\'s culinary heritage, and a lively "Vadamvali" (tug of war) competition that added a spirit of fun and friendly competition to the day. Cultural highlights of the event featured the rhythmic and energetic beats of a professional Chenda Melam troupe that set the festive mood, a surprise flashmob that delighted the audience, and "Spectra 13.0," a cultural showcase that highlighted diverse student talents in music, dance, and skits. The event, which benefited over 1,000 stakeholders, concluded with a prize distribution ceremony recognizing outstanding participants and a final Chenda Melam performance that brought the celebrations to a rousing close, successfully fostering a spirit of harmony, cultural appreciation, and togetherness across the campus.',
              date: '12 Sep 2025',
              venue: 'MIT SFT Foyer, IOD Lawn, and Urmilatai Karad Auditorium, MIT-ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: "Engineer's Day - Blood Donation Drive",
              description: "The Office of Student Affairs organized a voluntary Blood Donation Drive and Stem Cell Donation Registration in collaboration with DATRI to commemorate Engineer's Day, celebrated on the birth anniversary of Bharat Ratna Sir M. Visvesvaraya — one of India's greatest engineers and nation builders. This meaningful social impact initiative aimed to promote community service, health awareness, and social responsibility among students and faculty, channelling the spirit of engineering towards the betterment of society. The event was meticulously organized with a dedicated registration desk to manage the flow of donors, mandatory preliminary medical screenings including hemoglobin and blood pressure checks to ensure donor safety, and a professional medical team overseeing the entire collection process. All donors were provided with refreshments, a mandatory resting period post-donation, and received a Certificate of Appreciation or a Donor Card as a mark of recognition for their selfless contribution. The drive was a resounding success, with 280 individuals screened and a total of 177 blood units collected, making a significant impact on the lives of patients in need. The initiative fostered a culture of selfless service, empathy, and civic responsibility on campus, honouring the legacy of Sir M. Visvesvaraya in the truest sense.",
              date: '16 Sep 2025',
              venue: 'Central Foyer, New IT Building, MIT-ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'MIT-ADT Dandiya Nights',
              description: 'The MIT-ADT Dandiya Nights 2025 was a spectacular two-day cultural extravaganza celebrating the spirit of Navratri, organized by the Office of Student Affairs for students, faculty, and staff of the university. The event was a vibrant tribute to Indian tradition, bringing together thousands of participants in a joyful celebration of music, dance, and community. The festivities commenced with a traditional Shri Durga Mata Aarti that set a devotional and festive tone for the evening. The highlight of the event was a high-energy Garba competition that saw enthusiastic participation from groups including Leap of Grace and MIT COM - Chogada Champs, who dazzled the audience with their colourful attire and synchronized performances. The celebrations were further elevated by special guest performances from Ms. Parree Pande and Ms. Pritam Kagne, whose energy and talent captivated the crowd. The nights came alive with electrifying DJ sets by DJ Cheetan and DJ Trek, keeping the dance floor buzzing with energy well into the night. A prize distribution ceremony was held to recognize and reward outstanding participants in categories including the Garba Group Competition and the popular Reel Ratri 2.0 contest. With over 8,000 participants across both days, the MIT-ADT Dandiya Nights 2025 was a resounding success that promoted Indian traditions, teamwork, cultural pride, and community spirit in the most vibrant way possible.',
              date: '29 Sep 2025 – 30 Sep 2025',
              venue: 'Sports Complex, MIT-ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Nov': [
        {
          id: 25,
          month: 'November',
          image: november2425,
          title: "Children's Day Donation Drive & Constitution Day",
          details: [
            {
              text: "Children's Day - Donation Drive",
              description: "Children's Day at MIT ADT University was marked with a heartfelt donation drive organized by the Office of Student Affairs to support underprivileged children in the surrounding community. The initiative reflected the university's deep commitment to social responsibility, compassion, and community outreach. Students, faculty, and staff came together in large numbers to contribute essentials including stationery, books, school bags, clothing, and toys, ensuring that the joy of the occasion reached children who needed it most. The drive was preceded by an awareness campaign that encouraged the university community to participate actively and contribute generously. Volunteers from various student clubs and the MIT-IMPACT Student Council played a pivotal role in collecting, sorting, and distributing the donated items. The initiative not only brought smiles to the faces of underprivileged children but also instilled values of empathy, generosity, and civic engagement among the student participants. The event served as a powerful reminder of the responsibility that comes with education and privilege, and reinforced the university's vision of nurturing socially conscious and compassionate leaders.",
              date: '14 Nov 2025',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'National Constitution Day Celebration',
              description: "MIT-ADT University observed National Constitution Day on 26th November 2025 with a series of thoughtfully curated activities aimed at deepening the understanding of India's Constitution and promoting democratic values, civic responsibility, and constitutional literacy among students and staff. The celebration was organized by the Office of Student Affairs and featured a diverse range of academic and creative activities designed to engage participants at multiple levels. An Essay Writing Competition invited students to reflect on constitutional principles and their relevance in contemporary India, while a Quiz Competition tested participants' knowledge of the Constitution's history, provisions, and significance. A Poster Making Showcase provided a creative platform for students to visually interpret constitutional values such as justice, liberty, equality, and fraternity. A key highlight of the observance was a collective reading of the Preamble to the Constitution, a powerful and unifying moment that reinforced the shared values and aspirations of the nation. Official event creatives were circulated widely across the campus to ensure broad awareness and participation. The celebration successfully enhanced constitutional literacy, fostered a sense of civic responsibility, and strengthened the university community's understanding of citizenship, democratic values, and national identity. The event concluded on an inspiring note, fulfilling its objective of making Constitution Day a meaningful and enriching experience for all participants.",
              date: '26 Nov 2025',
              venue: 'MIT-ADT University Campus',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar', 'Prof. Dr. Pratibha Jagtap']
            }
          ]
        }
      ],
      'Jan': [
        {
          id: 26,
          month: 'January',
          image: january2425,
          title: 'Sankranti Celebrations & International Leadership Workshop',
          details: [
            {
              text: 'Sankranti, Lohri, Bihu & Pongal Celebrations',
              description: 'The harvest festivals of Sankranti, Lohri, Bihu, and Pongal were celebrated together in a grand and colourful event organized by the Office of Student Affairs, uniting students from different states and cultural backgrounds in a joyful expression of India\'s rich diversity. The celebration was a vibrant tapestry of regional traditions, featuring traditional rituals, folk performances, and cultural displays that represented the unique heritage of Maharashtra, Punjab, Assam, and Tamil Nadu. Students dressed in traditional attire from their respective regions, adding a visual spectacle to the festivities. The event featured the lighting of the Lohri bonfire, the flying of kites for Sankranti, traditional Bihu dance performances, and the preparation and sharing of Pongal as a symbol of gratitude and prosperity. Festive delicacies from each region were prepared and shared among participants, offering a delicious culinary journey across India. The celebration fostered a spirit of unity in diversity, cultural appreciation, and mutual respect among students from all corners of the country, reinforcing the university\'s commitment to creating an inclusive and harmonious campus environment.',
              date: '14 Jan 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'International Leadership Workshop - Climb Your Everest (CYE)',
              description: 'The International Leadership Workshop "Climb Your Everest" (CYE) was a transformative two-day residential program organized by the Office of Student Affairs, designed to inspire students to overcome personal and professional challenges and develop the qualities of exceptional leaders. The workshop drew participants from across the university and featured sessions led by experienced facilitators, motivational speakers, and leadership coaches with national and international expertise. Core themes of the workshop included goal setting and vision building, resilience and adaptability, team dynamics and collaborative problem-solving, emotional intelligence, and personal growth. Participants engaged in a series of interactive activities, outdoor challenges, group discussions, and reflective exercises that pushed them beyond their comfort zones and helped them discover their true potential. A highlight of the program was the "Everest Simulation" — a powerful experiential learning activity that mirrored the challenges of climbing a mountain and drew parallels with real-life leadership journeys. The workshop also included one-on-one coaching sessions and peer mentoring circles that provided personalized guidance and support. Participants left the program with a renewed sense of purpose, enhanced leadership skills, a stronger professional network, and the confidence to "climb their own Everest" in academics, career, and life.',
              date: '23 Jan 2026 – 24 Jan 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'PERSONA Fest Curtain Raiser',
              description: 'The PERSONA Fest Curtain Raiser was an electrifying event that officially marked the beginning of the countdown to the grand Persona Fest 2026, one of the most anticipated cultural festivals of the academic year. Organized by the Office of Student Affairs and the MIT-IMPACT Student Council, the Curtain Raiser was designed to build excitement, anticipation, and buzz across the campus. The event featured teaser performances by student artists in dance, music, and drama that offered a glimpse of the spectacular talent that would be on display at the main festival. Announcements of competitions, themes, and celebrity appearances were made to the enthusiastic audience, generating tremendous excitement and encouraging students to register and participate. The Curtain Raiser also served as a platform to introduce the organizing committee and volunteers who would be driving the festival, fostering a sense of ownership and pride among the student community. The energy and enthusiasm at the event set the perfect tone for what promised to be an unforgettable Persona Fest 2026.',
              date: '27 Jan 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Spectra 15.0',
              description: 'Spectra 15.0 was a landmark milestone edition of the beloved cultural series, celebrating the 15th chapter of one of MIT ADT University\'s most cherished student-led cultural showcases. The event brought together students from across departments and disciplines to celebrate artistic expression, creativity, and talent in a vibrant and inclusive atmosphere. The programme featured a rich lineup of competitions and performances spanning classical and contemporary dance, vocal and instrumental music, theatrical performances, stand-up comedy, and visual arts exhibitions. Judges from the arts and entertainment industry provided expert evaluation and mentorship to participants, elevating the quality and standard of the showcase. The event was attended by a large and enthusiastic audience of students, faculty, and guests who cheered on the performers and celebrated the diversity of talent on display. Spectra 15.0 was not just a cultural event but a celebration of the creative spirit that defines the MIT ADT University community, leaving participants and audience members alike with memories that would last a lifetime.',
              date: '27 Jan 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ],
      'Feb': [
        {
          id: 27,
          month: 'February',
          image: february2425,
          title: 'Yuva Sankalp Yatra, Shiv Jayanti, Persona Fest 2026 & Club CATALYST 6.0',
          details: [
            {
              text: 'Yuva Sankalp Yatra',
              description: 'Yuva Sankalp Yatra was an inspiring five-day initiative organized by the Office of Student Affairs that brought together youth from across the region to pledge their commitment to nation-building, social development, and responsible citizenship. The program was designed to ignite the spirit of service and patriotism among young students, encouraging them to look beyond personal ambitions and contribute meaningfully to the society around them. The Yatra featured a series of workshops, community outreach activities, motivational sessions, and interactive discussions led by eminent speakers, social workers, and change-makers. Participants visited local communities, engaged with underprivileged populations, and undertook service projects that addressed real-world challenges in areas such as education, health, and environmental sustainability. The program also included sessions on leadership, civic responsibility, and the role of youth in shaping India\'s future. Each day of the Yatra was structured to build on the previous, creating a cumulative journey of self-discovery, social awareness, and collective resolve. Participants returned to campus with a deeper sense of purpose, a stronger commitment to service, and a renewed belief in the power of youth to drive positive change.',
              date: '31 Jan 2026 – 4 Feb 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Shiv Jayanti',
              description: 'Shiv Jayanti was celebrated at MIT ADT University with great pride, reverence, and cultural fervour, honouring the extraordinary legacy of Chhatrapati Shivaji Maharaj — the visionary Maratha king whose life and values continue to inspire generations. The celebration was organized by the Office of Student Affairs and featured a rich programme of cultural events, processions, and awareness activities that brought the campus community together in a spirit of pride and patriotism. The event commenced with a traditional puja and floral tribute to Chhatrapati Shivaji Maharaj, followed by a vibrant procession through the campus that featured students dressed in traditional Maratha attire, carrying flags and banners celebrating the great king\'s legacy. Cultural performances including powada (ballads), folk dances, and theatrical presentations depicted key episodes from Shivaji Maharaj\'s life, highlighting his courage, strategic brilliance, and commitment to justice and the welfare of his people. Speeches and presentations by faculty and students reflected on the timeless relevance of Shivaji Maharaj\'s values — including respect for all religions, protection of the weak, and the importance of self-reliance — in today\'s world. The celebration concluded with a collective pledge to uphold these values in personal and professional life.',
              date: '19 Feb 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Persona Fest 2026',
              description: 'Persona Fest 2026 was the flagship annual cultural festival of MIT ADT University, a three-day extravaganza that brought together thousands of students, alumni, and guests in a spectacular celebration of talent, creativity, and the performing arts. Organized by the Office of Student Affairs in collaboration with the MIT-IMPACT Student Council, Persona Fest 2026 was the culmination of months of meticulous planning, preparation, and rehearsals by hundreds of student volunteers and performers. The festival featured an extensive lineup of competitions spanning classical and contemporary dance, vocal and instrumental music, theatrical performances, fine arts, literary events, and fashion shows, providing a platform for students to showcase their diverse talents before a large and enthusiastic audience. Celebrity performances by renowned artists added glamour and excitement to the festival, drawing massive crowds and creating unforgettable moments. Inspiring guest sessions by industry leaders, artists, and achievers provided students with valuable insights and motivation. The festival also featured food stalls, art installations, and interactive zones that created a vibrant and festive atmosphere across the campus. Persona Fest 2026 was not just a cultural event — it was a celebration of the spirit, creativity, and boundless potential of the MIT ADT University community, leaving every participant and attendee with memories that would last a lifetime.',
              date: '19 Feb 2026 – 21 Feb 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            },
            {
              text: 'Club CATALYST 6.0',
              description: 'Club CATALYST 6.0 was the sixth and most celebrated edition of the popular inter-club showcase, organized by the Office of Student Affairs as a grand platform for student clubs to present their year-long achievements, initiatives, and innovations to the wider university community. The event brought together over 50 clubs from across the university, each presenting their work through interactive stalls, live demonstrations, performances, and engaging activities that highlighted the breadth and depth of student talent and initiative at MIT ADT University. From technology and science clubs showcasing cutting-edge projects to cultural and arts clubs presenting creative performances, the event was a vibrant mosaic of student passion and enterprise. A key feature of Club CATALYST 6.0 was the "Best Club Award" competition, which recognized clubs that had made the most significant impact over the academic year through their activities, outreach, and community engagement. The event facilitated meaningful networking between students, faculty, industry guests, and alumni, fostering collaborations and partnerships that extended beyond the event itself. Club CATALYST 6.0 was a powerful testament to the culture of innovation, leadership, and community engagement that defines student life at MIT ADT University, and served as an inspiring conclusion to a remarkable academic year.',
              date: '19 Feb 2026',
              venue: 'MIT ADT University',
              resourcePersons: ['Prof. Dr. Suraj Bhoyar']
            }
          ]
        }
      ]
    }
  };

  // Derive all events for the current year
  const allCurrentEvents = Object.values(timelineData[selectedYear] || {}).flat();

  // All months in the selected year
  const allMonthsInYear = Object.keys(timelineData[selectedYear] || {});

  // Function to handle event click
  const handleEventClick = (event, detail) => {
    setSelectedEvent({
      ...detail,
      month: event.month,
      title: detail.text
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const navigateYear = (direction) => {
    if (direction === 'prev' && currentYearIndex > 0) {
      const newYear = academicYears[currentYearIndex - 1];
      setSelectedYear(newYear);
    } else if (direction === 'next' && currentYearIndex < academicYears.length - 1) {
      const newYear = academicYears[currentYearIndex + 1];
      setSelectedYear(newYear);
    }
  };

  const scrollToMilestone = (month) => {
    const events = timelineData[selectedYear]?.[month];
    if (events && events.length > 0) {
      const element = document.getElementById(`milestone-${events[0].id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('.milestone-content').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [allCurrentEvents]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header Controls */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Past Events Timeline</h1>

        {/* Year Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => navigateYear('prev')}
            disabled={currentYearIndex === 0}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#3C0A63] text-white hover:bg-[#3C0A63]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-700 px-4">
            Academic year: {selectedYear}
          </span>
          <button
            onClick={() => navigateYear('next')}
            disabled={currentYearIndex === academicYears.length - 1}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === academicYears.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#3C0A63] text-white hover:bg-[#3C0A63]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Month Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {allMonthsInYear.map((month, index) => (
            <button
              key={index}
              onClick={() => scrollToMilestone(month)}
              className="px-6 py-3 rounded-full font-medium transition-all text-base bg-[#3C0A63] text-white hover:shadow-lg hover:bg-[#d494e0]"
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-8 pb-16 relative">
        {allCurrentEvents.map((milestone, index) => (
          <div key={milestone.id} id={`milestone-${milestone.id}`} className="mb-16 relative flex flex-col items-center">
            {/* Month Label */}
            <button
              onClick={() => scrollToMilestone(milestone.month.slice(0, 3))}
              className="text-center text-3xl font-bold mb-6 px-6 py-2 z-10 bg-white rounded-full cursor-pointer hover:shadow-lg transition-shadow"
              style={{
                background: 'linear-gradient(to right, #9b28b1, #ff6f3c, #ffb020)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                marginTop: '32px'
              }}
            >
              {milestone.month}
            </button>

            {/* Timeline Segment */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#9b28b1] z-0"
              style={{ height: 'calc(100% - 50px)', top: '130px' }}
            ></div>

            {/* Milestone Content */}
            <div
              className={`milestone-content flex gap-8 items-center mx-8 opacity-0 w-full transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{
                transform: index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)'
              }}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 relative">
                <div
                  className="w-80 h-80 rounded-full overflow-hidden relative"
                  style={{ border: '12px solid #9b28b1', aspectRatio: '1/1' }}
                >
                  <div
                    className="absolute -top-1.5 -left-1.5 -right-1.5 -bottom-1.5 rounded-full pointer-events-none"
                    style={{ border: '12px solid white' }}
                  ></div>
                  <img
                    src={milestone.image}
                    alt={`Milestone ${milestone.month}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Description Container */}
              <div
                className="flex-1 p-6 text-white rounded-lg shadow-lg"
                style={{ background: 'linear-gradient(220deg, #ff9100 0%, #9f008f 90%)' }}
              >
                <h3 className="text-xl font-bold mb-4">{milestone.title}</h3>
                <ul className="space-y-2">
                  {milestone.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-base">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0 mt-2"></div>
                      <button
                        onClick={() => handleEventClick(milestone, detail)}
                        className="text-white hover:text-blue-300 hover:underline cursor-pointer transition-colors leading-relaxed text-left"
                      >
                        {detail.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {allCurrentEvents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-xl">No events found for {selectedYear}</p>
        </div>
      )}

      <EventModal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />

      <style jsx>{`
        .milestone-content.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        @media (max-width: 768px) {
          .milestone-content {
            flex-direction: column !important;
            gap: 1rem;
          }
          .milestone-content > div:first-child {
            width: 200px;
            height: 200px;
            min-width: 200px;
            min-height: 200px;
          }
          .milestone-content > div:first-child > div {
            width: 200px !important;
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .milestone-content > div:first-child {
            width: 180px;
            height: 180px;
            min-width: 180px;
            min-height: 180px;
          }
          .milestone-content > div:first-child > div {
            width: 180px !important;
            height: 180px !important;
          }
        }
      `}</style>
    </div>
  );
}
