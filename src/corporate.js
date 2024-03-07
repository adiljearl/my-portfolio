import './App.css';
/***********************
    Project Component
   ***********************/
  
    const Corporate = props => {
      
        const link = props.link || 'http://';
        const place = props.place;
        return (
          <div className="project">
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
              <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
            </a>
            <div className="project-details">
              <div className="project-tile">
                {props.title}{' '}
              </div>
              {props.children}
              <div className="buttons">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Visit this {place} <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
        );
      };

      export default Corporate;