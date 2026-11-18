import styled from "styled-components";

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid
    ${(props) => (props.$priority === "high" ? "#e63946" : "#2a9d8f")};
`;

function TaskItem({ task, onToggle }) {
  return (
    <li
      className={`task-card priority-${task.priority} ${
        task.completed ? "completed" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
      <span>{task.priority}</span>
    </li>
  );
}

export default TaskItem;