import * as React from 'react';

import './NTodo.scss';
import { NParagraph } from '@components/notion';

import { Todo } from '@types';

interface NTodoProps {
  todo: Todo;
  blockId: string;
}

export default function NTodo({ todo, blockId }: NTodoProps) {
  return (
    <label className="block-todo" htmlFor={blockId}>
      <input checked={todo.checked} id={blockId} type="checkbox" onChange={() => {}} />
      <NParagraph paragraph={todo} />
    </label>
  );
}
