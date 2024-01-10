import React from 'react';
import './CreateDate.scss';

interface CreateDateProps {
  strDate: string;
}
export default function CreateDate({ strDate }: CreateDateProps) {
  return <>{strDate && <span className="created-date">작성 : {strDate}</span>}</>;
}
