import React from 'react';
import cvData from './cv.json';
import './CV.scss';

const DoubleColumnSubsection = ({ subsections = [] }) => subsections.map(({ left, right, className='' }) => (
  <div className={`double-subsection ${className}`} key={`${left.content}-${right.content}`}>
    <span className={`left${left.bold ? ' bold' : ''}`}>{left.content}</span>
    <span className={`right${right.bold ? ' bold' : ''}`}>{right.content}</span>
  </div>
));

const SingleColumnSubsection = ({ subsections = [] }) => subsections.map(({ content, className='' }) => (
  <div className={`single-subsection ${className}`} key={content}>
    { content }
  </div>
));


const Section = ({ subsections, title='', type='' }) => (
  <div className="section">
    <h3 className="title">{title}</h3>
    {
      type === 'double-column'
        ? <DoubleColumnSubsection subsections={subsections}/>
        : <SingleColumnSubsection subsections={subsections}/>
    }
  </div>
);


const CV = () => {
  const { sections } = cvData.english;
  return (
    <div className="cv-page">
      { sections.map(section => <Section key={section.title} {...section} />) }
    </div>
  );
};

export default CV;
