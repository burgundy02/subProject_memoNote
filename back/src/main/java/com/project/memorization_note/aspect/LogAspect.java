package com.project.memorization_note.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LogAspect {

    @Pointcut("@annotation(com.project.memorization_note.aspect.annotation.Log)")
    private void pointCut() {}

    @Around("pointCut()")
    public Object around(ProceedingJoinPoint p) throws Throwable {
        log.info("\n----------------------------------\n컨트롤러에서 실행 될 메소드명: {}\n들어오는 값 : {}\n경로: {}\n---------------------------------- ",
                p.getSignature().getName(),
                p.getArgs(),
                p.getSignature().getDeclaringType().getSimpleName());
        return p.proceed();
    }
}
