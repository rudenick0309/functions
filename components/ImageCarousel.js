import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {ImageList as imageList} from "../imageData";


const ProjectImageList = () => {

  const [number, setNumber] = useState(0);

  // 아이콘 가져오기
  useEffect(()=>{
    const script = document.createElement('script')
    script.src = 'https://kit.fontawesome.com/e0f65b5c32.js';
    script.setAttribute('data-timestamp', Date.now().toString());
    document.body.appendChild(script);
  },[])

  useEffect(() => {
    const interval = setTimeout(() => {
      if (number === 3) {
        setNumber(0);
      } else {
        setNumber((prev) => prev + 1);
      }
    }, 3000);
    return () => {
      clearTimeout(interval);
    };
  }, [number]);


  const onClickLeft = useCallback(() => {
    if (number === 0) {
      setNumber(3);
    } else {
      setNumber((prev) => prev - 1);
    }
  }, [number]);

  const onClickRight = useCallback(() => {
    if (number === 3) {
      setNumber(0);
    } else {
      setNumber((prev) => prev + 1);
    }
  }, [number]);

  return (
    <Wrapper>
      <div onClick={onClickLeft}><I className="fas fa-angle-left"/></div>

      <ImageWrapper>
        <ImgList src={imageList.devsnerImage[number].src}/>
      </ImageWrapper>

      <div onClick={onClickRight}><I className="fas fa-angle-right"/></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const ImageWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:40em;
  height:30em;
`


const ImgList = styled.img`
  height:80%;
  width:50%;
  objectFit:contain;
  box-shadow: 0px 5px 10px lightgray;
  border-radius:20px;
`;

const I = styled.i`
  font-size:3em;
  cursor:pointer;
`

export default ProjectImageList;
