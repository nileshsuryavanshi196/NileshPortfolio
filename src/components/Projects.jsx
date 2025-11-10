import React from 'react';
import project from './data/projects.json';

const Projects = () => {
  return (
    <>
      <div className='container projects' id='projects' style={{ padding: '2rem 1rem' }}>
        <h1>PROJECTS</h1>
        <div className='row d-flex justify-content-center align-items-stretch'>
          {project.map((data) => (
            <div key={data.id} 
              className='my-4 col-sm-6 col-md-4 col-lg-3 mx-4'
            >
              <div
                className='card bg-dark text-light'
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  border: '1px solid yellow',
                  boxShadow: '5px 10px 10px rgba(101,175,10,0.5)',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}
                data-aos='flip-right'
                data-aos-duration='1000'
              >
                <div className='img p-3' style={{ textAlign: 'center' }}>
                  <img
                    src={data.imageSrc}
                    alt={data.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      border: '2px solid yellow',
                      borderRadius: '10px'
                    }}
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title'>{data.title}</h5>
                  <p className='card-text'>{data.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href={data.demo}
                      className='btn btn-primary'
                      style={{ flex: '1 1 40%', minWidth: '80px' }}
                    >
                      Demo
                    </a>
                    <a
                      href={data.source}
                      className='btn btn-warning'
                      style={{ flex: '1 1 40%', minWidth: '80px' }}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Inline CSS for extra responsiveness */}
      <style>{`
        @media (max-width: 576px) {
          .card-body .btn {
            width: 100% !important;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
