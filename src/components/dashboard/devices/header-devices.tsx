'use client';

import React, { useState } from 'react';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { IconButton, Tooltip } from '@mui/material';
import { Button } from 'antd';

import { ModalAddDeviceByForm, ModalQrScan } from './modals';

export const HeaderDevices = () => {
  const [openQr, setOpenQr] = useState<boolean>(false);
  const [openAddByForm, setOpenAddByForm] = useState<boolean>(false);
  console.log(openQr);
  const onHandleClick = (typeClick: 'QR' | 'FORM') => {
    if (typeClick == 'QR') {
      setOpenQr(true);
      // setOpenAddByForm(false);
    } else if (typeClick == 'FORM') {
      setOpenAddByForm(true);
      // setOpenQr(false);
    }
  };
  return (
    <>
      <>
        <ModalAddDeviceByForm open={openAddByForm} setOpen={setOpenAddByForm} />
        <ModalQrScan open={openQr} setOpen={setOpenQr} />
      </>
      <div className="flex items-center justify-between">
        <div>Devices</div>
        <div>
          <Button
            type="text"
            onClick={() => {
              onHandleClick('FORM');
            }}
          >
            Add device
          </Button>
          <Tooltip title={'Add device by scanning QR'} placement="top-end">
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => {
                onHandleClick('QR');
              }}
            >
              <QrCodeIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
