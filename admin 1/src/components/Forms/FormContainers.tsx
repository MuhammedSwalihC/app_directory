import React, { Fragment, useEffect, useRef } from "react";
import { Button } from "../CustomComponents/Button/Buttons";
import "./Forms.scss";

interface Props {
  children?: React.ReactNode;
  setArea?: any;
  area?: any;
  head?: any;
  pagination?: any;
  activities?: [any] | null;
  className?: any;
  styles?: any;
  ref?: any;
}

export const Pagination: React.FC<Props> = () => {
  return (
    <div className="pagination">
      <span className="fa fa-angle-double-left" />
      <span className="fa fa-angle-left" />
      <span className="fa fa-number">1</span>
      <span className="fa fa-number">2</span>
      <span className="fa fa-number">......</span>
      <span className="fa fa-angle-right" />
      <span className="fa fa-angle-double-right" />
    </div>
  );
};

export const ContainerSection: React.FC<Props> = ({ children }) => {
  return <div className="main-form">{children}</div>;
};

export const WorkArea: React.FC<Props> = ({
  children,
  className,
  styles,
  ref,
}) => {
  return (
    <div className={className} style={styles} ref={ref}>
      {children}
    </div>
  );
};

export const Container: React.FC<Props> = ({
  children,
  className,
  styles,
  ref,
}) => {
  return (
    <div className={className} style={styles} ref={ref}>
      {children}
    </div>
  );
};

export const ActivityContainer: React.FC<Props> = ({ activities }) => {
  return (
    <ul className="activity-frame">
      {activities &&
        activities.map((activity, key) => {
          return (
            activity.message && (
              <li key={key}>
                <span>
                  <b>Status Changed:</b>
                  {activity.modified_by}
                </span>
                <span>
                  <p>{activity.message}</p>
                </span>
              </li>
            )
          );
        })}
    </ul>
  );
};

export const SubmitGroup: React.FC<Props> = ({ children }) => {
  return <div className={`submt-grp`}>{children}</div>;
};
