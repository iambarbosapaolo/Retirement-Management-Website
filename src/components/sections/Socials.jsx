import React from 'react';
import '../../styles/Socials.css';
import { FaUserFriends, FaRegNewspaper, FaBookOpen, FaVideo, FaSyncAlt } from 'react-icons/fa';

const Socials = () => {
  const cards = [
    {
      id: 1,
      title: 'Community',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat eget eros ut sollicitudin. Proin eget dapibus massa.',
      link: '#',
      icon: <FaUserFriends />,
      isLarge: true,
      backgroundImage: 'url("https://images.unsplash.com/photo-1544717297-fa95b169b152?q=80&w=1760&auto=format&fit=crop")',
    },
    {
      id: 2,
      title: 'News',
      description: 'Vivamus sit amet diam vitae erat tincidunt posuere sit amet eget diam. Vestibulum in ante ligula. Cras tincidunt, mi in pulvinar gravida, ipsum ex posuere nulla.',
      link: '#',
      icon: <FaRegNewspaper />,
      isLarge: false,
    },
    {
      id: 3,
      title: 'Read Articles',
      description: 'Quisque nec felis dui. Proin lacinia accumsan est et dignissim. Donec ut sapien vel ligula tempus cursus. Suspendisse eu turpis eget diam hendrerit varius ut at quam.',
      link: '#',
      icon: <FaBookOpen />,
      isLarge: false,
    },
    {
      id: 4,
      title: 'Videos',
      description: 'Nunc ut ipsum vel ipsum laoreet rhoncus non vitae dolor. Nunc quis dignissim mauris.',
      link: '#',
      icon: <FaVideo />,
      isLarge: false,
    },
    {
      id: 5,
      title: 'Updates',
      description: 'Aenean ut magna ullamcorper arcu, nec feugiat dui. Fusce non leo mi. Praesent eu massa et odio malesuada ultrices vel a orci.',
      link: '#',
      icon: <FaSyncAlt />,
      isLarge: false,
    },
  ];

  return (
    <section className="socials-section">
      <div className="socials-header">
        <h2>Stay in touch.</h2>
        <p>Don’t miss out! Stay tuned for updates and opportunities.</p>
      </div>
      <div className="socials-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isLarge ? 'card-large' : 'card-small'}`}
            style={card.backgroundImage ? { backgroundImage: card.backgroundImage } : {}}
          >
            <div className="card-content">
              {card.icon && <div className="card-icon">{card.icon}</div>}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} className="card-link">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Socials;