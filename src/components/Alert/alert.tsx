import React from 'react';
import classnames from 'classnames';

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
}

export enum AlertModel {
  Normal = 'normal',
  Custom = 'custom',
}

interface AlertProps {
  className?: string;
  isShow: boolean;
  showClose?: boolean;
  alertType: AlertType;
  alertModel: AlertModel;
  children: React.ReactNode;
}
