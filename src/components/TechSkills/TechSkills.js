import { Item, Image, Text } from './TechSkills.style';

function TechSkills({ label, icon }) {
  return (
    <Item>
      <Image>
        <img src={icon} alt={label} width="40" height="40" />
      </Image>
      <Text>{label}</Text>
    </Item>
  );
}

export default TechSkills;
