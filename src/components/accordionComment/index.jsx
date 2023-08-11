import React from 'react';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import styles from './styles';
import { BLUE } from '../../utils/constants';
import { API_PROD } from '../../utils/environments';

export default function AccordionComment({ post }) {
  return (
    <div>
      <>
        <Accordion style={{ color: BLUE }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Ver comentarios...</Typography>
          </AccordionSummary>
          {post.comments.map((comment) => (
            <AccordionDetails>
              <Card variant="outlined" style={styles.card}>
                <div>
                  {comment.url_media ? (
                    <div>
                      <img
                        src={`${API_PROD}/file/${comment.url_media}`}
                        alt="img"
                      />
                      <h1>
                        <strong>{comment.user.name}</strong>
                      </h1>
                      <hi style={styles.text}>{comment.text}</hi>
                    </div>
                  ) : (
                    <div>
                      <h1>
                        <strong>{comment.user.name} PPPPPPPP</strong>
                      </h1>
                      <hi style={styles.text}>{comment.text}</hi>
                    </div>
                  )}
                </div>
              </Card>
            </AccordionDetails>
          ))}
        </Accordion>
      </>
    </div>
  );
}
