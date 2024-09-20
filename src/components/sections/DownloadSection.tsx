import SectionContainer from "../SectionContainer";
import SectionHeader from "../SectionHeader";
import CardList from "../CardList";
import { DownloadDataProps } from "../../types/interfaces";

interface DownloadSectionProps {
  downloadData: DownloadDataProps;
}

const DownloadSection = ({downloadData}: DownloadSectionProps) => {
  return (
    <SectionContainer>
      <SectionHeader
        title={downloadData.title}
        description={downloadData.description}
      />
      <CardList cards={downloadData.cards} />
    </SectionContainer>
  );
};

export default DownloadSection;
